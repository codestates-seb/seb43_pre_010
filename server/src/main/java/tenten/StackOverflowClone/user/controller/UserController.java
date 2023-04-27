package tenten.StackOverflowClone.user.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;
import tenten.StackOverflowClone.oath.userDetails.UserDetails;
import tenten.StackOverflowClone.user.dto.UserPatchDto;
import tenten.StackOverflowClone.user.dto.UserPostDto;
import tenten.StackOverflowClone.user.entity.User;
import tenten.StackOverflowClone.user.mapper.UserMapper;
import tenten.StackOverflowClone.user.service.UserService;

import javax.validation.Valid;

@RestController
@RequestMapping("/users")
@Validated
public class UserController {
    private final UserService userService;
    private final UserMapper mapper;

    public UserController(UserService userService, UserMapper mapper) {
        this.userService = userService;
        this.mapper = mapper;
    }

   @PostMapping("/auth/signup")
    public ResponseEntity postUser(@Valid @RequestBody UserPostDto userPostDto) {
        userService.createUser(mapper.userPostDtoToUser(userPostDto));
        return new ResponseEntity(HttpStatus.CREATED);
    }

   @PatchMapping("")
    public ResponseEntity patchUser(@AuthenticationPrincipal UserDetails userDetails,
                                    @Valid @RequestBody UserPatchDto userPatchDto) {
        User user = mapper.userPatchDtoToUser(userPatchDto);
        user.setUserId(userDetails.getUserId());
        userService.updateUser(user);

        return new ResponseEntity(HttpStatus.OK);
   }

   @DeleteMapping("")
    public ResponseEntity deleteUser(@AuthenticationPrincipal UserDetails userDetails) {

        User user = userService.findVerifiedUser(userDetails.getUserId());
        userService.deleteUser(user);
        return new ResponseEntity<>(HttpStatus.OK);
   }

}


