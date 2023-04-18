package tenten.StackOverflowClone.answer.mapper;

import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.MappingConstants;
import org.mapstruct.ReportingPolicy;
import tenten.StackOverflowClone.answer.dto.AnswerDto;
import tenten.StackOverflowClone.answer.entity.Answer;

import java.util.List;

@Mapper(componentModel = "spring", unmappedTargetPolicy = ReportingPolicy.IGNORE)
public interface AnswerMapper {

    // source는 파라미터로 받는 DTO의 필드명, target은 DB의 테이블과 (엔티티 클래스)필드명을 의미한다.
    //@Mapping(source = "questionId", target="question.id")
    //@Mapping(source = "userid", target = "user.id")
    Answer answerPostDtoToAnswer(AnswerDto.Post requestBody);

    Answer answerPatchDtoToAnswer(AnswerDto.Patch requestBody);

    AnswerDto.Response answerToAnswerResponseDto(Answer answer);

    // static으로 선언 -> 수동으로 구현
    List<AnswerDto.Response> answersToAnswerResponseDtos(List<Answer> answers);

//    static AnswerDto.Response toAnswerResponseDto(Answer answer){
//        return AnswerDto.Response.builder()
//                .answerId(answer.getId())
//                .content(answer.getContent())
//                .answerUser(answer.getUser().getEmail()) // 작성자명
//                .answerVote(answer.getScoreCount()) // 좋아요 수
//                .build();
//    }



}
