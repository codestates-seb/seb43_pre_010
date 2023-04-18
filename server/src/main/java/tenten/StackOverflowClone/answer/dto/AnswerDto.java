package tenten.StackOverflowClone.answer.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;

public class AnswerDto {

    @Getter
    @AllArgsConstructor
    public static class Post{
        private long questionId;

        // 회원 식별 Id
        private long userId;

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

    }
}
