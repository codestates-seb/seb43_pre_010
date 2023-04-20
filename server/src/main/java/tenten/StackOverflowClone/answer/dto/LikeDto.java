package tenten.StackOverflowClone.answer.dto;

import lombok.Getter;
import lombok.Setter;

public class LikeDto {

    @Getter
    @Setter
    public static class Post{
        private long userId;
        private long answerId;
        // 고정값 true를 보낸다.
        //private boolean status;
    }
}
