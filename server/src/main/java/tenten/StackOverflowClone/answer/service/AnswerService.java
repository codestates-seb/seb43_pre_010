package tenten.StackOverflowClone.answer.service;

import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import tenten.StackOverflowClone.answer.entity.Answer;
import tenten.StackOverflowClone.answer.repository.AnswerRepository;
import tenten.StackOverflowClone.exception.BusinessLogicException;
import tenten.StackOverflowClone.exception.ExceptionCode;
import tenten.StackOverflowClone.question.entity.Question;
import tenten.StackOverflowClone.question.service.QuestionService;
import tenten.StackOverflowClone.user.service.UserService;

import java.util.List;
import java.util.Optional;

@Service
public class AnswerService {

    private final AnswerRepository answerRepository;
    private final AnswerLikeService answerLikeService;
    private final QuestionService questionService;
    private final UserService userService;

    public AnswerService(AnswerRepository answerRepository, AnswerLikeService answerLikeService, QuestionService questionService, UserService userService) {
        this.answerRepository = answerRepository;
        this.answerLikeService = answerLikeService;
        this.questionService = questionService;
        this.userService = userService;
    }

    public Answer createAnswer(Answer answer){
        userService.findVerifiedUser(answer.getUser().getUserId());

        // question 정보 불러오기
        Question question = questionService.findVerifiedQuestion(answer.getQuestion().getQuestionId());

        // question 정보 넣어주기
        answer.setQuestion(question);

        return answerRepository.save(answer);
    }



    public Answer updateAnswer(Answer answer){

        Answer findAnswer = findVerifiedAnswer(answer.getAnswerId());

        Optional.ofNullable(answer.getContent())
                .ifPresent(content -> findAnswer.setContent(content));

        return answerRepository.save(findAnswer);
    }

    // Question 상세 조회시 답변이 함께 조회된다.
    // List로 모든 데이터를 조회
    // QuestionId로 Answer의 검색이 불가능하다
    public List<Answer> findAnswers(long questionId){

        return answerRepository.findByQuestion_QuestionIdAndAnswerStatus(questionId, Answer.AnswerStatus.ANSWER_REGISTRATION);

    }

    // 최신순, 오래된 순으로 정렬
    public List<Answer> findAnswersV2(long questionId, String sort){
        switch (sort.toLowerCase()) {
            case "newest":
                return answerRepository.findByQuestion_QuestionIdAndAnswerStatus(questionId, Answer.AnswerStatus.ANSWER_REGISTRATION,
                        Sort.by("answerId").descending());

            case "oldest":
                return answerRepository.findByQuestion_QuestionIdAndAnswerStatus(questionId, Answer.AnswerStatus.ANSWER_REGISTRATION,
                        Sort.by("answerId").ascending());
            default:
                throw new BusinessLogicException(ExceptionCode.NOT_IMPLEMENTATION);
        }
    }

    // 컬럼을 삭제하지 않고 상태를 변경함
    public Answer deleteAnswer(long answerId){
        Answer findAnswer = findVerifiedAnswer(answerId);

        findAnswer.setAnswerStatus(Answer.AnswerStatus.ANSWER_DELETE);

        return answerRepository.save(findAnswer);
    }

    public Answer findVerifiedAnswer(long answerId){
        Optional<Answer> optionalAnswer =
                answerRepository.findById(answerId);
        Answer findAnswer =
                optionalAnswer.orElseThrow(() ->
                        new BusinessLogicException(ExceptionCode.ANSWER_NOT_FOUND));

        return findAnswer;
    }

    public void addLikeCount(List<Answer> answers){

        for(Answer answer: answers){
            answer.setScoreCount(answerLikeService.calculateLike(answer.getAnswerId()));
        }

    }

}
