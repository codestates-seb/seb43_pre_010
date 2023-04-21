package tenten.StackOverflowClone.question.controller;

import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.userdetails.User;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;
import tenten.StackOverflowClone.dto.MultiResponseDto;
import tenten.StackOverflowClone.dto.SingleResponseDto;
import tenten.StackOverflowClone.question.dto.QuestionDto;
import tenten.StackOverflowClone.question.dto.QuestionLikeDto;
import tenten.StackOverflowClone.question.entity.Question;
import tenten.StackOverflowClone.question.entity.QuestionLike;
import tenten.StackOverflowClone.question.mapper.QuestionLikeMapper;
import tenten.StackOverflowClone.question.mapper.QuestionMapper;
import tenten.StackOverflowClone.question.service.QuestionLikeService;
import tenten.StackOverflowClone.question.service.QuestionService;
import tenten.StackOverflowClone.utils.UriCreator;

import javax.servlet.http.HttpSession;
import javax.validation.Valid;
import javax.validation.constraints.Positive;
import java.net.URI;
import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/questions")
@Validated
public class QuestionController {
    private final QuestionMapper mapper;
    private final QuestionService service;
    private final QuestionLikeMapper likeMapper;
    private final QuestionLikeService likeService;

    public QuestionController(QuestionMapper mapper, QuestionService service,
                              QuestionLikeMapper likeMapper, QuestionLikeService likeService) {
        this.mapper = mapper;
        this.service = service;
        this.likeMapper = likeMapper;
        this.likeService = likeService;
    }

    @PostMapping("/ask")
    public ResponseEntity postQuestion(@Valid @RequestBody QuestionDto.Post post) {
        Question question = mapper.questionPostDtoToQuestion(post);

        Question createdQuestion = service.createQuestion(question);
        URI location = UriCreator.createUri("/questions", createdQuestion.getQuestionId());

        return ResponseEntity.created(location).build();
    }

    @PatchMapping("/{question-id}/edit")
    public ResponseEntity patchQuestion(@PathVariable("question-id") @Positive long questionId,
                                        @Valid @RequestBody QuestionDto.Patch patch) {
        patch.setQuestionId(questionId);
        Question question = service.updateQuestion(mapper.questionPatchDtoToQuestion(patch));

        return new ResponseEntity<>(
                mapper.questionToQuestionPatchResponseDto(question),
                HttpStatus.OK
        );
    }

    @GetMapping("/{question-id}")
    public ResponseEntity getQuestion(@PathVariable("question-id") @Positive long questionId) {
        Question question = service.findQuestion(questionId);

        return new ResponseEntity<>(
                new SingleResponseDto<>(mapper.questionToQuestionResponseDto(question)),
                HttpStatus.OK
        );
    }

    // All Questions & Top Questions 모두 처리
    @GetMapping
    public ResponseEntity getQuestions(@Positive @RequestParam int page,
                                       @Positive @RequestParam int size,
                                       @RequestParam String sort) {
        Page<Question> pageQuestions = service.findQuestions(page - 1, size, sort);
        List<Question> questions = new ArrayList<>(pageQuestions.getContent());

        return new ResponseEntity<>(
                new MultiResponseDto<>(mapper.questionsToQuestionResponseDtos(questions), pageQuestions),
                HttpStatus.OK
        );
    }

    // 검색 기능 - 조건 : user의 id, exact phrase
    // 페이지네이션 기능도 추가 -> client로부터 page, size를 받음(정렬은 최신순이 default)
    // 확장 가능성 있음
    @GetMapping("/search")
    public ResponseEntity getQuestionsBySearching(@RequestParam String condition,
                                                  @RequestParam String value,
                                                  @Positive @RequestParam int page,
                                                  @Positive @RequestParam int size) {
        Page<Question> pageQuestions = service.findQuestionsBySearching(condition, value, page - 1, size);
        List<Question> questions = new ArrayList<>(pageQuestions.getContent());

        return new ResponseEntity<>(
                new MultiResponseDto<>(mapper.questionsToQuestionResponseDtos(questions), pageQuestions),
                HttpStatus.OK
        );
    }

    @DeleteMapping("/{question-id}")
    public ResponseEntity deleteQuestion(@PathVariable("question-id") @Positive long questionId,
                                         HttpSession httpSession) {
        User principal = (User)httpSession.getAttribute("principal");

        service.deleteQuestion(questionId, principal);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

    // 특정 질문의 좋아요 버튼을 누른 경우
    @PostMapping("/{question-id}/like")
    public ResponseEntity postLikeToQuestion(@PathVariable("question-id") @Positive long questionId,
                                           @Valid @RequestBody QuestionLikeDto.Post post) {
        post.setQuestionId(questionId);

        QuestionLike questionLike = likeMapper.questionLikePostDtoToQuestionLike(post);
        questionLike.setLike(true);

        QuestionLike pressedQuestionLike = likeService.pressQuestionLike(questionLike);

        if (pressedQuestionLike == null) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        else {
            return new ResponseEntity<>(likeMapper.questionLikeToQuestionLikeResponseDto(pressedQuestionLike),
                    HttpStatus.OK);
        }
    }

    // 특정 질문의 싫어요 버튼을 누른 경우
    @PostMapping("/{question-id}/unlike")
    public ResponseEntity postUnlikeToQuestion(@PathVariable("question-id") @Positive long questionId,
                                           @Valid @RequestBody QuestionLikeDto.Post post) {
        post.setQuestionId(questionId);

        QuestionLike questionLike = likeMapper.questionLikePostDtoToQuestionLike(post);
        questionLike.setLike(false);

        QuestionLike pressedQuestionLike = likeService.pressQuestionLike(questionLike);

        if (pressedQuestionLike == null) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        else {
            return new ResponseEntity<>(likeMapper.questionLikeToQuestionLikeResponseDto(pressedQuestionLike),
                    HttpStatus.OK);
        }
    }
}
