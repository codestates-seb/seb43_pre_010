package tenten.StackOverflowClone.user.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import tenten.StackOverflowClone.user.dto.UserDto;
import tenten.StackOverflowClone.user.entity.User;
import tenten.StackOverflowClone.user.mapper.UserMapper;
import tenten.StackOverflowClone.user.service.UserService;

import javax.validation.Valid;

//@RestController
//@RequiredArgsConstructor
//@RequestMapping("/users")
//public class UserController {
//    private final UserMapper mapper;
//    private final UserService userService;
//    @PostMapping
//    public ResponseEntity<?> postUser(@Valid @RequestBody UserDto.Post postDto) {
//        User user = mapper.userPostDtoToUser(postDto);
//        User savedUser = userService.saveUser(User);
//        UserDto.Response response = mapper.userToUserResponseDto(savedUser);
//        return new ResponseEntity<>(response, HttpStatus.OK);
//    }
//}
