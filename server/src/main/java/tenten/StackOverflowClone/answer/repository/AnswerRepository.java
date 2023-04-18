package tenten.StackOverflowClone.answer.repository;


import org.springframework.data.jpa.repository.JpaRepository;
import tenten.StackOverflowClone.answer.entity.Answer;

import java.util.List;

public interface AnswerRepository extends JpaRepository<Answer, Long> {
    // questionId를 기반으로 모든 질문을 조회한다.
    // List<Answer> findAllByQuestionId(long questionId);
}
