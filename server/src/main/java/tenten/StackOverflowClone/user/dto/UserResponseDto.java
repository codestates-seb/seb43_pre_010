package tenten.StackOverflowClone.user.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;
import tenten.StackOverflowClone.user.entity.User;

@Getter
@Setter
public class UserResponseDto {
    private long userId;
    private String email;
    private String name;
    private String password;
    private User.UserStatus userStatus;

    public String getUserStatus() {
        return userStatus.getStatus();
    }
}
