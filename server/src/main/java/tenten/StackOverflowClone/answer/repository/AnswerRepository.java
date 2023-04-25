package tenten.StackOverflowClone.answer.repository;


import org.springframework.data.jpa.repository.JpaRepository;
import tenten.StackOverflowClone.answer.entity.Answer;

import java.util.List;

public interface AnswerRepository extends JpaRepository<Answer, Long> {
    // questionId로 모든 질문을 조회한다.
    // @Query 애너테이션 사용시 네이밍 규칙이 적용되지 않음
    List<Answer> findByQuestion_QuestionIdAndAnswerStatus(long questionId, Answer.AnswerStatus answerStatus);



}
