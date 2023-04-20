package tenten.StackOverflowClone.question.dto;

import lombok.*;
import tenten.StackOverflowClone.answer.dto.AnswerDto;
import tenten.StackOverflowClone.answer.entity.Answer;
import tenten.StackOverflowClone.user.entity.User;

import javax.validation.constraints.NotNull;
import javax.validation.constraints.Positive;
import java.time.LocalDateTime;
import java.util.List;
import tenten.StackOverflowClone.answer.mapper.AnswerMapper;

public class QuestionDto {
    @Getter
    @AllArgsConstructor
    public static class Post {
        @Positive
        @NotNull(message = "user-id는 필수입니다.")
        private Long userId;

        @NotNull(message = "질문 제목은 필수입니다.")
        private String title;

        @NotNull(message = "질문 내용은 필수입니다.")
        private String content;
    }

    @Getter
    @AllArgsConstructor
    public static class Patch {
        private Long questionId;

        @NotNull(message = "user-id는 필수입니다.")
        private Long userId;

        private String title;

        private String content;

        public void setQuestionId(long questionId) {
            this.questionId = questionId;
        }
    }

    @Getter
    @Setter
    @NoArgsConstructor
    public static class PatchResponse {
        private Long questionId;
        private Long userId;
        private String title;
        private String content;
        private LocalDateTime modifiedAt;
        public void setUserId(User user) {
            this.userId = user.getId();
        }
    }

    @Getter
    @Setter
    @NoArgsConstructor
    public static class Response {
        private Long questionId;
        private Long userId;
        private String title;
        private String content;
        private LocalDateTime createdAt;
        private LocalDateTime modifiedAt;
        private Integer viewCount;
        private Integer scoreCount;
        private List<AnswerDto.Response> answers;

        public void setUserId(User user) {
            this.userId = user.getId();
        }

//        public void setAnswers(List<Answer> answers) {
//            this.answers = AnswerMapper.answersToAnswerResponseDtos(answers);
//        }
    }
}
