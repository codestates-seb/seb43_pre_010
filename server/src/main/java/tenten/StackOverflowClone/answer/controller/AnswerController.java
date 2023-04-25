package tenten.StackOverflowClone.answer.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;
import tenten.StackOverflowClone.answer.dto.AnswerDto;
import tenten.StackOverflowClone.answer.entity.Answer;
import tenten.StackOverflowClone.answer.mapper.AnswerLikeMapper;
import tenten.StackOverflowClone.answer.mapper.AnswerMapper;
import tenten.StackOverflowClone.answer.service.AnswerLikeService;
import tenten.StackOverflowClone.answer.service.AnswerService;
import tenten.StackOverflowClone.dto.SingleResponseDto;
import tenten.StackOverflowClone.utils.UriCreator;

import javax.validation.Valid;
import javax.validation.constraints.Positive;
import java.net.URI;

@RestController
@RequestMapping("/answers")
@Validated
public class AnswerController {

    public final static String ANSWER_DEFAULT_URL = "/answers";
    private final AnswerService answerService;
    private final AnswerMapper answerMapper;
    private final AnswerLikeService answerLikeService;
    private final AnswerLikeMapper answerLikeMapper;

    public AnswerController(AnswerService answerService, AnswerMapper answerMapper, AnswerLikeService answerLikeService, AnswerLikeMapper answerLikeMapper) {
        this.answerService = answerService;
        this.answerMapper = answerMapper;
        this.answerLikeService = answerLikeService;
        this.answerLikeMapper = answerLikeMapper;
    }

    // TODO: 추후 QuestionController로 이동
    @PostMapping("/{question-id}")
    public ResponseEntity postAnswer(@PathVariable("question-id") @Positive long questionId,
                                     @Valid @RequestBody AnswerDto.Post requestBody){
        // client 에서 user 정보를 따로 받기

        requestBody.addQuestionId(questionId);
        // requestBody.addUserId(userId);

        Answer answer = answerMapper.answerPostDtoToAnswer(requestBody);
        Answer createdAnswer = answerService.createAnswer(answer);

        URI location = UriCreator.createUri(ANSWER_DEFAULT_URL, createdAnswer.getAnswerId());

        return ResponseEntity.created(location).build();
    }

    @PatchMapping("/{answer-id}")
    public ResponseEntity patchAnswer(@PathVariable("answer-id") @Positive long answerId,
                                      @Valid @RequestBody AnswerDto.Patch requestBody){
        requestBody.setAnswerId(answerId);

        Answer answer = answerMapper.answerPatchDtoToAnswer(requestBody);
        Answer updatedAnswer = answerService.updateAnswer(answer);

        return new ResponseEntity<>(
                new SingleResponseDto<>(answerMapper.answerToAnswerResponseDto(updatedAnswer)), HttpStatus.OK);
    }

    @DeleteMapping("/{answer-id}")
    public ResponseEntity deleteAnswer(@PathVariable("answer-id") @Positive long answerId){

        answerService.deleteAnswer(answerId);

        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }


}