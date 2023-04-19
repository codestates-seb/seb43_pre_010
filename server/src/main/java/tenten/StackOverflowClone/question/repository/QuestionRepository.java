package tenten.StackOverflowClone.question.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import tenten.StackOverflowClone.question.entity.Question;

public interface QuestionRepository extends JpaRepository<Question, Long> {
}
