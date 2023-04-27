package tenten.StackOverflowClone.oath.userDetails;

import org.springframework.security.core.GrantedAuthority;
import tenten.StackOverflowClone.user.entity.User;

import java.util.Collection;

public class UserDetails extends User implements org.springframework.security.core.userdetails.UserDetails {

    public UserDetails(User user) {
        this.setUserId(user.getUserId());
        this.setPassword(user.getPassword());
        this.setEmail(user.getEmail());
    }

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return null;
    }

    @Override
    public String getUsername() {
        return getEmail();
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return true;
    }
}
