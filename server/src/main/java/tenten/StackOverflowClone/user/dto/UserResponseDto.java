package tenten.StackOverflowClone.user.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class UserResponseDto {
    private long userId;
    private String email;
    private String name;
    private String password;
}
