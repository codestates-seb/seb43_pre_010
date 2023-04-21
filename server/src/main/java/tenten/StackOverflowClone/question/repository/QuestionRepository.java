package tenten.StackOverflowClone.question.repository;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import tenten.StackOverflowClone.question.entity.Question;

import java.util.List;

public interface QuestionRepository extends JpaRepository<Question, Long> {
    // JPQL - 엔티티 객체를 대상으로 질의하는 쿼리
    // 특정 질문자, 최신순으로 질문 조회
    @Query(value = "select q from Question q where q.user.userId = :userId")
    Page<Question> findByUserIdFromRecently (@Param("userId") Long user, Pageable pageable);

    // 제목 또는 내용에 특정 문구를 포함하고 있는 질문 조회
    @Query(value = "select q from Question q where q.title like %:phrase% or q.content like %:phrase%")
    Page<Question> findByExactPhrase(@Param("phrase") String phrase, Pageable pageable);
}
