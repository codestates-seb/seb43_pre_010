package tenten.StackOverflowClone.answer.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import tenten.StackOverflowClone.answer.entity.Likes;

import java.util.Optional;

public interface AnswerLikeRepository extends JpaRepository<Likes, Long> {

    // userId와 AnswerId로 좋아요를 검색한다.
    Optional<Likes> findByUser_UserIdAndAnswer_AnswerId(long userId, long answerId);

    int countByAnswer_AnswerIdAndStatusIsTrue(long answerId);
    int countByAnswer_AnswerIdAndStatusIsFalse(long answerId);

}
