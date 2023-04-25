package tenten.StackOverflowClone.question.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;
import tenten.StackOverflowClone.question.entity.Question;
import tenten.StackOverflowClone.user.entity.User;

import javax.validation.constraints.NotNull;
import javax.validation.constraints.Positive;

public class QuestionLikeDto {
    @Getter
    @AllArgsConstructor
    public static class Post {
        @Positive
        @NotNull
        private Long userId;

        private Long questionId;

        public void setQuestionId(Long questionId) {
            this.questionId = questionId;
        }
    }

    @Getter
    @Setter
    public static class Response {
        private Long questionLikeId;

        private String name;

        private Long questionId;

        private Boolean like;

        public void setName(User user) {
            this.name = user.getName();
        }

        public void setQuestionId(Question question) {
            this.questionId = question.getQuestionId();
        }
    }
}
