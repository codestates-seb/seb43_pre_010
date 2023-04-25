package tenten.StackOverflowClone.answer.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotEmpty;

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
    public static class Response{
        private long answerId;
        private long questionId;
        private long userId;
        private String content;
        // username은 추후 userId로 부터 가져온다.
        private String username;
        private Integer scoreCount;

    }
}
