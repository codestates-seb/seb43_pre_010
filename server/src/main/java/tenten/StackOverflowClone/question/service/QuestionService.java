package tenten.StackOverflowClone.question.service;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import tenten.StackOverflowClone.exception.BusinessLogicException;
import tenten.StackOverflowClone.exception.ExceptionCode;
import tenten.StackOverflowClone.question.entity.Question;
import tenten.StackOverflowClone.question.repository.QuestionRepository;
import tenten.StackOverflowClone.user.entity.User;
import tenten.StackOverflowClone.user.service.UserService;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.transaction.Transactional;
import java.util.List;
import java.util.Optional;

@Service
@Transactional
public class QuestionService {
    private final QuestionRepository repository;
    private final UserService userService;

    @PersistenceContext
    EntityManager entityManager;

    public QuestionService(QuestionRepository repository, UserService userService) {
        this.repository = repository;
        this.userService = userService;
    }

    public Question createQuestion(Question question) {
        verifyQuestionPost(question);
        Question savedQuestion = saveQuestion(question);

        return savedQuestion;
    }

    public Question updateQuestion(Question question) {
        // 존재하는 question인지 확인
        Question findQuestion = findVerifiedQuestion(question.getQuestionId());

        // 질문 수정이 가능한지 확인
        checkUpdatePossibility(question, findQuestion);

        // 질문 수정
        Optional.ofNullable(question.getTitle())
                .ifPresent(questionTitle -> findQuestion.setTitle(questionTitle));
        Optional.ofNullable(question.getContent())
                .ifPresent(questionContent -> findQuestion.setContent(questionContent));

        return saveQuestion(findQuestion);
    }

    public Question findQuestion(long questionId) {
        Question verifiedQuestion = findVerifiedQuestion(questionId);

        // 조회가 가능한지 확인
        checkFindPossibility(verifiedQuestion);

        // 조회수 +1 증가
        verifiedQuestion.setViewCount(verifiedQuestion.getViewCount() + 1);

        return saveQuestion(verifiedQuestion);
    }

    // 검색 기능 이용하여 질문 조회
    public Page<Question> findQuestionsBySearching(String condition, String value, int page, int size) {
        // 영속성 컨텍스트 비우기
        // 비우지 않으면, 영속성 컨텍스트에 남아있던 이전 쿼리의 결과들이 같이 보내짐
        // 즉, 특정 기준값에 부합하지 않는 질문들을 같이 보내옴
        entityManager.clear();

        Pageable pageable = PageRequest.of(page, size, Sort.by("questionId").descending());

        switch (condition.toLowerCase()) {
            case "user":
                return repository.findByUserIdFromRecently(Long.parseLong(value), pageable);
            case "exact phrase":
                return repository.findByExactPhrase(value, pageable);
            case "answer":
                return repository.findByAnswerCount(Integer.parseInt(value), pageable);
            default:
                throw new BusinessLogicException(ExceptionCode.NOT_IMPLEMENTATION);
        }
    }

    public Page<Question> findQuestions(int page, int size, String sort) {
        switch (sort.toLowerCase()) {
            // 최신순
            case "newest":
                return repository.findAll(PageRequest.of(page, size, Sort.by("questionId").descending()));
            // 오래된순
            case "oldest":
                return repository.findAll(PageRequest.of(page, size, Sort.by("questionId").ascending()));
            // 조회순
            case "viewcount":
                return repository.findAll(PageRequest.of(page, size, Sort.by("viewCount").descending()));
            // 서버가 지원 X
            default:
                throw new BusinessLogicException(ExceptionCode.NOT_IMPLEMENTATION);
        }
    }

    public void deleteQuestion(long questionId,
                               org.springframework.security.core.userdetails.User user) {
        Question findQuestion = findVerifiedQuestion(questionId);

        // 삭제가 가능한지 확인
        checkDeletePossibility(findQuestion, user);

        findQuestion.setQuestionStatus(Question.QuestionStatus.QUESTION_DELETE);
        saveQuestion(findQuestion);
    }

    // scoreCount update하는 메서드
    public void updateQuestionScoreCount(Question question, String changedLikeResult) {
        switch (changedLikeResult) {
            case "true": // 좋아요
                question.setScoreCount(question.getScoreCount() + 1);
                break;
            case "false": // 싫어요
                question.setScoreCount(question.getScoreCount() - 1);
                break;
            case "true_change": // '싫어요 -> 좋아요'로 변경한 경우
                question.setScoreCount(question.getScoreCount() + 2);
                break;
            case "false_change": // '좋아요 -> 싫어요'로 변경한 경우
                question.setScoreCount(question.getScoreCount() - 2);
                break;
        }

        saveQuestion(question); // update Question query 하나 나감
    }

    // 질문 작성 시 검증 -> 질문한 사용자가 존재하는지 확인
    private void verifyQuestionPost(Question question) {
//        User user = userService.findVerifiedUser(question.getUser().getUserId());
//
//        question.setUser(user);
    }

    // 질문 객체를 DB에 저장하는 메서드
    private Question saveQuestion(Question question) {
        return repository.save(question);
    }

    public Question findVerifiedQuestion(long questionId) {
        Optional<Question> optionalQuestion = repository.findById(questionId);
        Question findQuestion = optionalQuestion.orElseThrow(() ->
                new BusinessLogicException(ExceptionCode.QUESTION_NOT_FOUND));

        return findQuestion;
    }

    private void checkUpdatePossibility(Question changedQuestion, Question originalQuestion) {
        // 1. 회원이 수정하려는 건지 확인 -> getEmail()에서 NPE를 막기 위함
//        User verifiedUser = userService.findVerifiedUser(changedQuestion.getUser().getUserId());
//        changedQuestion.setUser(verifiedUser);

        // 2. 질문을 등록한 사용자가 or 관리자가 수정하는게 맞는지 확인
        if (changedQuestion.getUser().getUserId() != originalQuestion.getUser().getUserId()) {
            if (!((changedQuestion.getUser().getEmail()).equals("admin@gmail.com"))) {
                throw new BusinessLogicException(ExceptionCode.CANNOT_CHANGE_QUESTION);
            }
        }

        // 3. 질문이 삭제 상태인지 확인
        if (changedQuestion.getQuestionStatus() == Question.QuestionStatus.QUESTION_DELETE) {
            throw new BusinessLogicException(ExceptionCode.CANNOT_CHANGE_QUESTION);
        }
    }

    private void checkFindPossibility(Question question) {
        // 1. 질문이 삭제 상태인지 확인
        if (question.getQuestionStatus() == Question.QuestionStatus.QUESTION_DELETE) {
            throw new BusinessLogicException(ExceptionCode.CANNOT_READ_QUESTION);
        }
    }

    private void checkDeletePossibility(Question question,
                                        org.springframework.security.core.userdetails.User user) {
        // 1. 질문이 이미 삭제 상태인지 확인
        if (question.getQuestionStatus() == Question.QuestionStatus.QUESTION_DELETE) {
            // 410 Gone
            throw new BusinessLogicException(ExceptionCode.ALREADY_DELETED_QUESTION);
        }

        // 2. 관리자가 삭제 시도를 한 거면 통과
        if (user.getUsername().equals("admin@gmail.com")) {
            return;
        }

        // 3. 질문자가 삭제 시도를 한 거면 통과 -> 아니면 예외 발생
        // Spring Security User 객체의 Username == 우리가 정의한 User의 email
        if (!question.getUser().getEmail().equals(user.getUsername())) {
            throw new BusinessLogicException(ExceptionCode.CANNOT_DELETE_QUESTION);
        }
    }
}
