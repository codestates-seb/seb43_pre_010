package tenten.StackOverflowClone.answer.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import tenten.StackOverflowClone.answer.entity.AnswerLike;

import java.util.Optional;

public interface AnswerLikeRepository extends JpaRepository<AnswerLike, Long> {

    // userId와 AnswerId로 좋아요를 검색한다.
    Optional<AnswerLike> findByUser_UserIdAndAnswer_AnswerId(long userId, long answerId);

    int countByAnswer_AnswerIdAndStatusIsTrue(long answerId);
    int countByAnswer_AnswerIdAndStatusIsFalse(long answerId);

}
