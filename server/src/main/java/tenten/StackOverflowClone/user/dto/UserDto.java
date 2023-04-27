package tenten.StackOverflowClone.user.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public class UserDto {
    private long userId;
    private String email;
    private String name;
}
