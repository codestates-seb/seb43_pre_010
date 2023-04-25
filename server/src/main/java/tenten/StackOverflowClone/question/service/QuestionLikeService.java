package tenten.StackOverflowClone.question.service;

import org.springframework.stereotype.Service;
import tenten.StackOverflowClone.exception.BusinessLogicException;
import tenten.StackOverflowClone.exception.ExceptionCode;
import tenten.StackOverflowClone.question.entity.Question;
import tenten.StackOverflowClone.question.entity.QuestionLike;
import tenten.StackOverflowClone.question.repository.QuestionLikeRepository;
import tenten.StackOverflowClone.user.entity.User;
import tenten.StackOverflowClone.user.service.UserService;

import javax.transaction.Transactional;
import java.util.Optional;

@Service
@Transactional
public class QuestionLikeService {
    private final QuestionLikeRepository repository;
    private final UserService userService;
    private final QuestionService questionService;

    public QuestionLikeService(QuestionLikeRepository repository, QuestionService questionService, UserService userService) {
        this.repository = repository;
        this.userService = userService;
        this.questionService = questionService;
    }

    public QuestionLike pressQuestionLike(QuestionLike requestedQuestionLike) {
//        User verifiedUser = userService.findVerifiedUser(requestedQuestionLike.getUser().getUserId());
//        Question verifiedQuestion = questionService.findVerifiedQuestion(requestedQuestionLike.getQuestion().getQuestionId());
//
//        // 특정 user, 특정 question과 관련된 QuestionLike가 처음 생성되는 건지 확인
//        Optional<QuestionLike> optionalQuestionLike = checkQuestionLikeFirst(verifiedUser, verifiedQuestion);
//
//        // QuestionLike 객체를 처음 생성하는 경우
//        if (optionalQuestionLike.isEmpty()) {
//            requestedQuestionLike.setUser(verifiedUser);
//            requestedQuestionLike.setQuestion(verifiedQuestion);
//            // QuestionLike가 DB에 반영되고 나서 연관되어 있는 Question이 DB에 update되는 순서가 맞음
//            QuestionLike createdQuestionLike = saveQuestionLike(requestedQuestionLike);
//
//            // vote 결과를 연관 Question의 scoreCount에 반영
//            questionService.updateQuestionScoreCount(verifiedQuestion, Boolean.toString(requestedQuestionLike.getLike()));
//
//            return createdQuestionLike;
//        }
//        else { // 기존에, QuestionLike가 DB에 존재하는 경우
//            QuestionLike findQuestionLike = optionalQuestionLike.get();
//
//            // 요청 받은 like랑 DB에 저장되어 있던 like랑 동일한 경우 -> 취소
//            if (findQuestionLike.getLike() == requestedQuestionLike.getLike()) {
//                findQuestionLike.getQuestion().getQuestionLikes().remove(findQuestionLike);
//                repository.delete(findQuestionLike);
//
//                // vote 결과를 연관 Question의 scoreCount에 반영
//                questionService.updateQuestionScoreCount(verifiedQuestion, Boolean.toString(!requestedQuestionLike.getLike()));
//
//                return null;
//            }
//            else { // 요청 받은 like랑 DB에 저장되어 있던 like랑 다른 경우 -> 변경
//                findQuestionLike.setLike(requestedQuestionLike.getLike());
//                QuestionLike changedQuestionLike = saveQuestionLike(findQuestionLike);
//
//                // vote 결과를 연관 Question의 scoreCount에 반영
//                questionService.updateQuestionScoreCount(verifiedQuestion, requestedQuestionLike.getLike() + "_change");
//
//                return changedQuestionLike;
//            }
//        }
        return new QuestionLike();
    }

    private Optional<QuestionLike> checkQuestionLikeFirst(User user, Question question) {
        return repository.findByUserAndQuestion(user, question);
    }

    // DB에 QuestionLike를 Insert or Update
    private QuestionLike saveQuestionLike(QuestionLike questionLike) {
        return repository.save(questionLike);
    }
}
