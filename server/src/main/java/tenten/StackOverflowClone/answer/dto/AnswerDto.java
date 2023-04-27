package tenten.StackOverflowClone.answer.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;
import tenten.StackOverflowClone.user.entity.User;

import javax.validation.constraints.NotBlank;

public class AnswerDto {

    @Getter
    @AllArgsConstructor
    public static class Post{
        private long questionId;
        private long userId;

        @NotBlank(message = "질문 내용을 작성해주세요")
        private String content;

        public void addQuestionId(long questionId){
            this.questionId = questionId;
        }

        public void addUserId(long userId){
            this.userId = userId;
        }
    }

    @Getter
    @AllArgsConstructor
    public static class Patch{
        private long answerId;

        @NotBlank(message = "질문 내용을 작성해주세요")
        private String content;

        public void setAnswerId(long answerId) {
            this.answerId = answerId;
        }
    }

    @AllArgsConstructor
    @Getter
    @Setter
    public static class Response{
        private long answerId;
        private long questionId;
        private long userId;
        private String content;
        private String username;
        private Integer scoreCount;

        public void setName(User user) {
            this.username = user.getName();
        }
    }
}
