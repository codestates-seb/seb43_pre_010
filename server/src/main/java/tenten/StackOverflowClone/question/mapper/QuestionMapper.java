package tenten.StackOverflowClone.question.mapper;

import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import tenten.StackOverflowClone.question.dto.QuestionDto;
import tenten.StackOverflowClone.question.entity.Question;
import tenten.StackOverflowClone.user.entity.User;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@Mapper(componentModel = "spring")
public interface QuestionMapper {
    default Question questionPostDtoToQuestion(QuestionDto.Post post) {
        Question question = new Question();
        User user = new User();
        user.setUserId(post.getUserId());

        question.setUser(user);
        question.setTitle(post.getTitle());
        question.setContent(post.getContent());

        return question;
    }

    default Question questionPatchDtoToQuestion(QuestionDto.Patch patch) {
        Question question = new Question();
        User user = new User();
        user.setUserId(patch.getUserId());

        question.setUser(user);
        question.setQuestionId(patch.getQuestionId());
        question.setTitle(patch.getTitle());
        question.setContent(patch.getContent());

        return question;
    }

    @Mapping(source = "user", target = "userId")
    QuestionDto.PatchResponse questionToQuestionPatchResponseDto(Question question);

    @Mapping(source = "user", target = "userId")
    QuestionDto.Response questionToQuestionResponseDto(Question question);

    default List<QuestionDto.Response> questionsToQuestionResponseDtos(List<Question> questions) {
        if (questions == null) {
            return null;
        }

        List<Question> readQuestions = questions
                .stream()
                .filter(question -> question.getQuestionStatus() != Question.QuestionStatus.QUESTION_DELETE)
                .collect(Collectors.toList());

        List<QuestionDto.Response> responses = new ArrayList<>(readQuestions.size());

        for (Question question : readQuestions) {
            responses.add(questionToQuestionResponseDto(question));
        }

        return responses;
    }
}
