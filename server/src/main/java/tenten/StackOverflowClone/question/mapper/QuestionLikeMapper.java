package tenten.StackOverflowClone.question.mapper;

import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import tenten.StackOverflowClone.question.dto.QuestionLikeDto;
import tenten.StackOverflowClone.question.entity.Question;
import tenten.StackOverflowClone.question.entity.QuestionLike;
import tenten.StackOverflowClone.user.entity.User;

@Mapper(componentModel = "spring")
public interface QuestionLikeMapper {
    default QuestionLike questionLikePostDtoToQuestionLike(QuestionLikeDto.Post post) {
        QuestionLike questionLike = new QuestionLike();
        User user = new User();
        user.setUserId(post.getUserId());

        Question question = new Question();
        question.setQuestionId(post.getQuestionId());

        questionLike.setUser(user);
        questionLike.setQuestion(question);

        return questionLike;
    }

    @Mapping(source = "user", target = "name")
    @Mapping(source = "question", target = "questionId")
    QuestionLikeDto.Response questionLikeToQuestionLikeResponseDto(QuestionLike questionLike);
}
