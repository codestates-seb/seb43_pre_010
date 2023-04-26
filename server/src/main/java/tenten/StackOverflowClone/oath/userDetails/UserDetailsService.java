package tenten.StackOverflowClone.oath.userDetails;

import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Component;
import tenten.StackOverflowClone.exception.BusinessLogicException;
import tenten.StackOverflowClone.exception.ExceptionCode;
import tenten.StackOverflowClone.user.entity.User;
import tenten.StackOverflowClone.user.repository.UserRepository;

import java.util.Optional;

@Component
public class UserDetailsService implements org.springframework.security.core.userdetails.UserDetailsService {
    private final UserRepository userRepository;
    public UserDetailsService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        Optional<User> optionalUser = userRepository.findByEmail(username);
        User findUser = optionalUser.orElseThrow(() -> new BusinessLogicException(ExceptionCode.USER_NOT_FOUND));

        return new tenten.StackOverflowClone.oath.userDetails.UserDetails(findUser);
    }
}
