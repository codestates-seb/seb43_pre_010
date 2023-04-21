package tenten.StackOverflowClone.question.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import tenten.StackOverflowClone.question.entity.Question;
import tenten.StackOverflowClone.question.entity.QuestionLike;
import tenten.StackOverflowClone.user.entity.User;

import java.util.Optional;

public interface QuestionLikeRepository extends JpaRepository<QuestionLike, Long> {
    // 특정 user, 특정 question이 매핑되어 있는 QuestionLike를 Optional형태로 가져옴
    Optional<QuestionLike> findByUserAndQuestion(User user, Question question);
}
