package tenten.StackOverflowClone.user.repository;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import tenten.StackOverflowClone.user.entity.User;

import java.util.Optional;

//멤버 목록 조회시 활동중인 멤버만 출력
public interface UserRepository extends JpaRepository<User, Long> {
    Optional<User> findByEmail(String email);

    @Query(value = "SELECT m FROM User m WHERE m.userStatus = 'ACTIVE_USER'")
    Page<User> findAllWhoActive(Pageable pageable);
}
