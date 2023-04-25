package tenten.StackOverflowClone.answer.mapper;

import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.ReportingPolicy;
import tenten.StackOverflowClone.answer.dto.AnswerLikeDto;
import tenten.StackOverflowClone.answer.entity.AnswerLike;

@Mapper(componentModel = "spring", unmappedTargetPolicy = ReportingPolicy.IGNORE)
public interface AnswerLikeMapper {
    @Mapping(source = "userId", target = "user.userId")
    @Mapping(source = "answerId", target = "answer.answerId")
    AnswerLike likeDtoToLikes(AnswerLikeDto.Post requestBody);
}
