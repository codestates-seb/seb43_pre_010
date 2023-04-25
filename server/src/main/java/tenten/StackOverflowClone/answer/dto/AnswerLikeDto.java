package tenten.StackOverflowClone.answer.dto;

import lombok.Getter;
import lombok.Setter;

public class AnswerLikeDto {

    @Getter
    @Setter
    public static class Post{
        private long userId;
        private long answerId;
    }
}
