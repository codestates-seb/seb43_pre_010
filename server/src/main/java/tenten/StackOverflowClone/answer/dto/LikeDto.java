package tenten.StackOverflowClone.answer.dto;

import lombok.Getter;
import lombok.Setter;

public class LikeDto {

    @Getter
    @Setter
    public static class Post{
        private long userId;
        private long answerId;
    }
}
