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

    Answer answerPostDtoToAnswer(AnswerDto.Post requestBody);
    Answer answerPatchDtoToAnswer(AnswerDto.Patch requestBody);

    AnswerDto.Response answerToAnswerResponseDto(Answer answer);

    List<AnswerDto.Response> answersToAnswerResponseDtos(List<Answer> answers);

}
