package tenten.StackOverflowClone.question.controller;

import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.userdetails.User;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;
import tenten.StackOverflowClone.answer.dto.LikeDto;
import tenten.StackOverflowClone.answer.entity.Answer;
import tenten.StackOverflowClone.answer.entity.Likes;
import tenten.StackOverflowClone.answer.mapper.AnswerLikeMapper;
import tenten.StackOverflowClone.answer.service.AnswerLikeService;
import tenten.StackOverflowClone.answer.service.AnswerService;
import tenten.StackOverflowClone.dto.MultiResponseDto;
import tenten.StackOverflowClone.dto.SingleResponseDto;
import tenten.StackOverflowClone.question.dto.QuestionDto;
import tenten.StackOverflowClone.question.entity.Question;
import tenten.StackOverflowClone.question.mapper.QuestionMapper;
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
    private final AnswerService answerService;
    private final AnswerLikeMapper answerLikeMapper;
    private final AnswerLikeService answerLikeService;

    public QuestionController(QuestionMapper mapper, QuestionService service, AnswerService answerService, AnswerLikeMapper answerLikeMapper, AnswerLikeService answerLikeService) {
        this.mapper = mapper;
        this.service = service;
        this.answerService = answerService;
        this.answerLikeMapper = answerLikeMapper;
        this.answerLikeService = answerLikeService;
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

        // answer 정보 추가
        List<Answer> answers = answerService.findAnswers(questionId);
        answerService.addLikeCount(answers);
        question.setAnswers(answers);

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
    // 확장 가능성 있음
    @GetMapping("/search")
    public ResponseEntity getQuestionsBySearching(@RequestParam String condition,
                                                  @RequestParam String value) {
        List<Question> questionsBySearching = service.findQuestionsBySearching(condition, value);

        return new ResponseEntity<>(
                new MultiResponseDto<>(mapper.questionsToQuestionResponseDtos(questionsBySearching)),
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


    // Answer 관련 핸들러
    @PostMapping("/{question-id}/{answer-id}/like")
    public ResponseEntity likeAnswer(@PathVariable("answer-id") long answerId,
                                     @RequestBody LikeDto.Post requestBody){
        // 질문 검증
        Answer answer = answerService.findVerifiedAnswer(answerId);

        // TODO: 회원 정보 검증 로직 추가

        // 회원 정보, 답변 정보를 받는다.
        Likes like = answerLikeMapper.likeDtoToLikes(requestBody);

        // true를 입력하지 않고, 컨트롤러 단에서 true를 set해준다
        like.setStatus(true);

        answerLikeService.updateLike(like);

        return new ResponseEntity<>(HttpStatus.OK);
    }

    @PostMapping("/{question-id}/{answer-id}/dislike")
    public ResponseEntity dislikeAnswer(@PathVariable("answer-id") long answerId,
                                     @RequestBody LikeDto.Post requestBody){
        // 질문 검증
        Answer answer = answerService.findVerifiedAnswer(answerId);

        // TODO: 회원 정보 검증 로직 추가

        // 회원 정보, 답변 정보를 받는다.
        Likes like = answerLikeMapper.likeDtoToLikes(requestBody);

        // false를 입력하지 않고, 컨트롤러 단에서 false를 set해준다
        like.setStatus(false);

        answerLikeService.updateLike(like);

        return new ResponseEntity<>(HttpStatus.OK);
    }


}
