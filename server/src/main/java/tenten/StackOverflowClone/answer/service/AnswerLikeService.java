package tenten.StackOverflowClone.answer.service;

import org.springframework.stereotype.Service;
import tenten.StackOverflowClone.answer.entity.AnswerLike;
import tenten.StackOverflowClone.answer.repository.AnswerLikeRepository;
import tenten.StackOverflowClone.user.service.UserService;

import java.util.Optional;

@Service
public class AnswerLikeService {

    private final AnswerLikeRepository answerLikeRepository;
    private final UserService userService;

    public AnswerLikeService(AnswerLikeRepository answerLikeRepository, UserService userService) {
        this.answerLikeRepository = answerLikeRepository;
        this.userService = userService;
    }

    public void updateLike(AnswerLike like){
        // 회원 검증
        userService.findVerifiedUser(like.getUser().getUserId());

        // userId, answerId로 조회한다.
        Optional<AnswerLike> findLikes = answerLikeRepository.findByUser_UserIdAndAnswer_AnswerId(like.getUser().getUserId(), like.getAnswer().getAnswerId());

        // 1. 좋아요 컬럼이 없을 경우 추가
        if(!(findLikes.isPresent())){
            answerLikeRepository.save(like);
        }
        // 2. 좋아요 컬럼이 있고, 상태가 같을 경우 취소
        else if(findLikes.get().getStatus() == like.getStatus()){
            answerLikeRepository.delete(findLikes.get());

        }
        // 3. 좋아요 컬림이 있고, 상태가 다를 경우 변경
        else if(findLikes.get().getStatus() != like.getStatus()){
            answerLikeRepository.delete(findLikes.get());
            like.setStatus(!(findLikes.get().getStatus()));

            answerLikeRepository.save(like);
        }
    }

    public int calculateLike(long answerId){

        int count = answerLikeRepository.countByAnswer_AnswerIdAndStatusIsTrue(answerId) -
                answerLikeRepository.countByAnswer_AnswerIdAndStatusIsFalse(answerId);

        return count;
    }


}
