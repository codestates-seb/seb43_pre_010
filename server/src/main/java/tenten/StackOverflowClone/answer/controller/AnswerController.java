package tenten.StackOverflowClone.answer.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import tenten.StackOverflowClone.answer.dto.AnswerDto;
import tenten.StackOverflowClone.answer.entity.Answer;
import tenten.StackOverflowClone.answer.mapper.AnswerMapper;
import tenten.StackOverflowClone.answer.service.AnswerService;
import tenten.StackOverflowClone.dto.SingleResponseDto;
import tenten.StackOverflowClone.utils.UriCreator;

import java.net.URI;

@RestController
@RequestMapping("/answers")
public class AnswerController {

    public final static String ANSWER_DEFAULT_URL = "/answers";
    private final AnswerService answerService;
    private final AnswerMapper answerMapper;

    public AnswerController(AnswerService answerService, AnswerMapper answerMapper) {
        this.answerService = answerService;
        this.answerMapper = answerMapper;
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

        URI location = UriCreator.createUri(ANSWER_DEFAULT_URL, createdAnswer.getId());

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
    public void likeAnswer(@PathVariable("question-id") long questionId,
                                     @PathVariable("answer-id") long answerId){
        // 질문 검증
        Answer answer = answerService.findVerifiedAnswer(answerId);

        // 좋아요 추가
        // Likeservice.updateLike();


    }




}
