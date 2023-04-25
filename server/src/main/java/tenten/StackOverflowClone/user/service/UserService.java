package tenten.StackOverflowClone.user.service;

import lombok.extern.slf4j.Slf4j;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import tenten.StackOverflowClone.exception.BusinessLogicException;
import tenten.StackOverflowClone.exception.ExceptionCode;
import tenten.StackOverflowClone.user.dto.UserResponseDto;
import tenten.StackOverflowClone.user.entity.User;
import tenten.StackOverflowClone.user.repository.UserRepository;

import java.util.List;
import java.util.Optional;

@Slf4j
@Service
@Transactional
public class UserService {
    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;

    public UserService(UserRepository userRepository, PasswordEncoder passwordEncoder) {
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
    }

    public User createUser(User user) {
        //이메일 중복 확인
        verifyExistsEmail(user.getEmail());
        //비밀번호 암호화
        String encryptedPassword = passwordEncoder.encode(user.getPassword());
        user.setPassword(encryptedPassword);
        //userStatus 설정
        user.setUserStatus(User.UserStatus.USER_ACTIVE);

//        List<String> roles = authori
        //회원가입
        userRepository.save(user);


        return user;
    }

    public User updateUser(User user) {
        User findUser = findVerifiedUser(user.getUserId());

        Optional.ofNullable(user.getName())
                .ifPresent(name->findUser.setName(name));

        return userRepository.save(findUser);
    }

    public User findUser(long userId) {
        User findUser = findVerifiedUser(userId);
        return findUser;
    }

    public void deleteUser(User user) {
        user.setUserStatus(User.UserStatus.USER_QUIT);
        userRepository.save(user);
    }
    public void verifyExistsEmail(String email) {
        Optional<User> user = userRepository.findByEmail(email);
        if (user.isPresent()) {
            throw new BusinessLogicException(ExceptionCode.USER_EXIST);
        }
    }
    public User findVerifiedUser(Long userId) {
        Optional<User> user = userRepository.findById(userId);
        User findUser = user.orElseThrow(() -> new BusinessLogicException(ExceptionCode.USER_NOT_FOUND));
        return findUser;
    }

    public User findByEmail(String email) {
        Optional<User> user = userRepository.findByEmail(email);
        User findUser = user.orElseThrow(() -> new BusinessLogicException(ExceptionCode.USER_NOT_FOUND));
        return findUser;
    }

//    public void aut

}
