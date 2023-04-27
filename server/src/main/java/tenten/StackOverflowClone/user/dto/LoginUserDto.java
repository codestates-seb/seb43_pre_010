package tenten.StackOverflowClone.user.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
public class LoginUserDto {
    private long userId;
    private String email;
    private String name;
}
