package tenten.StackOverflowClone.answer.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import tenten.StackOverflowClone.answer.dto.AnswerDto;
import tenten.StackOverflowClone.answer.dto.LikeDto;
import tenten.StackOverflowClone.answer.entity.Answer;
import tenten.StackOverflowClone.answer.entity.Likes;
import tenten.StackOverflowClone.answer.mapper.AnswerMapper;
import tenten.StackOverflowClone.answer.mapper.LikeMapper;
import tenten.StackOverflowClone.answer.service.AnswerService;
import tenten.StackOverflowClone.answer.service.LikeService;
import tenten.StackOverflowClone.dto.SingleResponseDto;
import tenten.StackOverflowClone.question.entity.Question;
import tenten.StackOverflowClone.user.entity.User;
import tenten.StackOverflowClone.utils.UriCreator;

import java.net.URI;
import java.util.List;

@RestController
@RequestMapping("/answers")
public class AnswerController {

    public final static String ANSWER_DEFAULT_URL = "/answers";
    private final AnswerService answerService;
    private final AnswerMapper answerMapper;
    private final LikeService likeService;
    private final LikeMapper likeMapper;

//    public AnswerController(AnswerService answerService, AnswerMapper answerMapper) {
//        this.answerService = answerService;
//        this.answerMapper = answerMapper;
//    }


    public AnswerController(AnswerService answerService, AnswerMapper answerMapper, LikeService likeService, LikeMapper likeMapper) {
        this.answerService = answerService;
        this.answerMapper = answerMapper;
        this.likeService = likeService;
        this.likeMapper = likeMapper;
    }

    // TODO: 추후 QuestionController로 이동
    @PostMapping("/{question-id}/answers")
    public ResponseEntity postAnswer(@PathVariable("question-id") long questionId,
                                     @RequestBody AnswerDto.Post requestBody){
        // client 에서 user 정보를 따로 받기

        requestBody.addQuestionId(questionId);
        // requestBody.addUserId(userId);

        Answer answer = answerMapper.answerPostDtoToAnswer(requestBody);
        Answer createdAnswer = answerService.createAnswer(answer);

        URI location = UriCreator.createUri(ANSWER_DEFAULT_URL, createdAnswer.getAnswerId());

        return ResponseEntity.created(location).build();
    }

    @PatchMapping("/{answer-id}")
    public ResponseEntity patchAnswer(@PathVariable("answer-id") long answerId,
                                      @RequestBody AnswerDto.Patch requestBody){
        requestBody.setAnswerId(answerId);

        Answer answer = answerMapper.answerPatchDtoToAnswer(requestBody);
        Answer updatedAnswer = answerService.updateAnswer(answer);

        return new ResponseEntity<>(
                new SingleResponseDto<>(answerMapper.answerToAnswerResponseDto(updatedAnswer)), HttpStatus.OK);
    }

    @DeleteMapping("/{answer-id}")
    public ResponseEntity deleteAnswer(@PathVariable("answer-id") long answerId){

        answerService.deleteAnswer(answerId);

        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

    // TODO: 추후 QuestionController로 이동
    @PostMapping("/{question-id}/answer/{answer-id}/like")
    public ResponseEntity likeAnswer(@PathVariable("answer-id") long answerId,
                           @RequestBody LikeDto.Post requestBody){
        // 질문 검증
        Answer answer = answerService.findVerifiedAnswer(answerId);

        // TODO: 회원 정보 검증 로직 추가


        Likes like = likeMapper.likeDtoToLikes(requestBody);

        // true를 입력하지 않고, 컨트롤러 단에서 true를 set해준다
        // FIXME: 서비스 클래스로 이동하는게 좋을지
        like.setStatus(true);

        likeService.createLike(like);

        return new ResponseEntity<>(HttpStatus.CREATED);
    }

    @PostMapping("/{question-id}/answer/{answer-id}/dislike")
    public ResponseEntity dislikeAnswer(@PathVariable("answer-id") long answerId,
                                        @RequestBody LikeDto.Post requestBody){
        // 질문 검증
        Answer answer = answerService.findVerifiedAnswer(answerId);

        // TODO: 회원 정보 검증 로직 추가


        Likes like = likeMapper.likeDtoToLikes(requestBody);

        // true를 입력하지 않고, 컨트롤러 단에서 false를 set해준다
        // FIXME: 서비스 클래스로 이동하는게 좋을지
        like.setStatus(false);

        likeService.createLike(like);

        return new ResponseEntity<>(HttpStatus.CREATED);

    }



//    @GetMapping("/test/{question-id}")
//    public ResponseEntity getAnswer(@PathVariable("question-id")long questionId){
//
//        List<Answer> answers = answerService.findAnswers(questionId);
//
//        return new ResponseEntity<>(answerMapper.answersToAnswerResponseDtos(answers), HttpStatus.OK);
//
//    }




}
