package tenten.StackOverflowClone.user.dto;

import lombok.Getter;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Pattern;

public class UserDto {

    @Getter
    public static class Post {
        @NotBlank(message = "이름은 공백일 수 없습니다.")
        private String name;

        @NotBlank(message = "email 은 공백일 수 없습니다.")
        @Email(message = "유효하지 않은 이메일 형식입니다.")
        private String email;

        @Pattern(regexp = "^(?=.*[A-Za-z])(?=.*\\d)(?=.*[$@$!%*#?&])[A-Za-z\\d$@$!%*#?&]{8,20}$",
                message = "password 길이는 최소 8자 이상 최대 20자 이하, 숫자 1자 이상, 대소문자 구분없이 영문자 1자 이상, 특수문자 1자 이상 입력 해주세요.")
        private String password;
    }

    @Getter
    public static class Patch {

        @NotBlank(message = "이름은 공백일 수 없습니다.")
        private String name;

        @NotBlank(message = "email 은 공백일 수 없습니다.")
        @Email(message = "유효하지 않은 이메일 형식입니다.")
        private String email;

        @Pattern(regexp = "^(?=.*[A-Za-z])(?=.*\\d)(?=.*[$@$!%*#?&])[A-Za-z\\d$@$!%*#?&]{8,20}$",
                message = "password 길이는 최소 8자 이상 최대 20자 이하, 숫자 1자 이상, 대소문자 구분없이 영문자 1자 이상, 특수문자 1자 이상 입력 해주세요.")
        private String password;
    }


}
