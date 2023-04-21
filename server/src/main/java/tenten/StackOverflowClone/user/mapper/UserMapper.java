package tenten.StackOverflowClone.user.mapper;

import org.mapstruct.Mapper;
import tenten.StackOverflowClone.user.dto.UserPatchDto;
import tenten.StackOverflowClone.user.dto.UserPostDto;
import tenten.StackOverflowClone.user.dto.UserResponseDto;
import tenten.StackOverflowClone.user.entity.User;

import java.util.List;

@Mapper(componentModel = "spring")
public interface UserMapper {
    User userPostDtoToUser(UserPostDto userPostDto);
    User userPatchDtoToUser(UserPatchDto userPatchDto);
    UserResponseDto userToUserResponseDto(User user);
    List<UserResponseDto> usersToUserResponseDtos(List<User> users);
}
