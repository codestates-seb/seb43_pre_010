package tenten.StackOverflowClone.answer.mapper;

import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.MappingConstants;
import org.mapstruct.ReportingPolicy;
import tenten.StackOverflowClone.answer.dto.AnswerDto;
//import tenten.StackOverflowClone.answer.dto.AnswerResponseDto;
import tenten.StackOverflowClone.answer.entity.Answer;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@Mapper(componentModel = "spring", unmappedTargetPolicy = ReportingPolicy.IGNORE)
public interface AnswerMapper {

    // source는 파라미터로 받는 DTO의 필드명, target은 엔티티 클래스에서 참조하는 필드명을 의미한다.
    // 즉, AnswerDto.Post의 questionId 필드를, Answer 엔티티 클래스의 question과 연결하고 Question 엔티티 클래스의 questionId에 매핑한다는 의미다.
    // AnswerDto.Post의 userId 필드를, user Answer 엔티티 클래스의 user와 연결하고 User 엔티티 클래스의 userId에 매핑한다는 의미다.
    @Mapping(source = "questionId", target = "question.questionId")
    @Mapping(source = "userId", target = "user.userId")
    Answer answerPostDtoToAnswer(AnswerDto.Post requestBody);

    Answer answerPatchDtoToAnswer(AnswerDto.Patch requestBody);

    // AnswerDto.Response는 역으로 Answer를 ResponseDto로 변환하므로,
    // Answer 엔티티 클래스의 question과 연결된 Question 엔티티 클래스의 questionId와 AnswerDto.Response의 questionId를 매핑한다는 의미다.
    // Answer 엔티티 클래스의 User와 연결된 User 엔티티 클래스의 userId와 AnswerDto.Response의 userId를 매핑한다는 의미다.
    @Mapping(source = "question.questionId", target = "questionId")
    @Mapping(source = "user.userId", target = "userId")
    AnswerDto.Response answerToAnswerResponseDto(Answer answer);

    // static으로 선언 -> 수동으로 구현
    //List<AnswerDto.Response> answersToAnswerResponseDtos(List<Answer> answers);

    static List<AnswerDto.Response> answersToAnswerResponseDtos(List<Answer> answers){
        return answers.stream()
                .map(answer -> new AnswerDto.Response(
                        answer.getAnswerId(),
                        answer.getQuestion().getQuestionId(),
                        answer.getUser().getUserId(),
                        answer.getContent(),
                        answer.getUser().getName(),
                        answer.getScoreCount()))
                .collect(Collectors.toList());

    }


}
