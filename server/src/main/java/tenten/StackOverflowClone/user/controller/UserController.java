//package tenten.StackOverflowClone.user.controller;
//
//import lombok.RequiredArgsConstructor;
//import org.springframework.http.HttpStatus;
//import org.springframework.http.ResponseEntity;
//import org.springframework.validation.annotation.Validated;
//import org.springframework.web.bind.annotation.*;
//import tenten.StackOverflowClone.dto.SingleResponseDto;
//import tenten.StackOverflowClone.user.dto.UserDto;
//import tenten.StackOverflowClone.user.entity.User;
//import tenten.StackOverflowClone.user.mapper.UserMapper;
//import tenten.StackOverflowClone.user.service.UserService;
//
//import javax.validation.Valid;
//
//@RestController
//@RequestMapping("/users")
//@Validated
//public class UserController {
//    private final UserService userService;
//    private final UserMapper mapper;
//
//    public UserController(UserService userService, UserMapper mapper) {
//        this.userService = userService;
//        this.mapper = mapper;
//    }
//
//    @PostMapping("/join")
//    public ResponseEntity postUser(@Valid @RequestBody UserPostDto userPostDto) {
//        userService.createUser(mapper.userPostDtoToUser(userPostDto));
//        return new ResponseEntity(HttpStatus.CREATED);
//    }
//}
//
//
