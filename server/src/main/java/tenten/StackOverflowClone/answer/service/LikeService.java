package tenten.StackOverflowClone.answer.service;

import org.springframework.stereotype.Service;
import tenten.StackOverflowClone.answer.entity.Likes;
import tenten.StackOverflowClone.answer.repository.LikeRepository;
import tenten.StackOverflowClone.exception.BusinessLogicException;
import tenten.StackOverflowClone.exception.ExceptionCode;

import java.util.Optional;

@Service
public class LikeService {
    // TODO: createLike와 createDislike의 로직이 동일하므로, 하나의 메서드로 리팩터링하고
    // TODO: 좋아요 싫어요 상태를 변경하는 로직 구현

    private final LikeRepository likeRepository;

    public LikeService(LikeRepository likeRepository) {
        this.likeRepository = likeRepository;
    }


    public void createLike(Likes like){

        // DB에서 (likeId, answerId)로 좋아요 검색
        Optional<Likes> findLikes = likeRepository.findByUser_UserIdAndAnswer_AnswerId(like.getUser().getUserId(), like.getAnswer().getAnswerId());

        // 중복처리를 막기 위한 처리
        // 컬럼이 존재하면 예외 발생, 없으면 좋아요 컬럼 추가
        if(findLikes.isPresent()){
            new BusinessLogicException(ExceptionCode.SAME_LIKE_EXIST);
        }
        else{
            likeRepository.save(like);
        }
    }

    public void createDislike(Likes like){
        Optional<Likes> findLikes = likeRepository.findByUser_UserIdAndAnswer_AnswerId(like.getUser().getUserId(), like.getAnswer().getAnswerId());

        if(findLikes.isPresent()){
            new BusinessLogicException(ExceptionCode.SAME_LIKE_EXIST);
        }
        else{
            likeRepository.save(like);
        }

    }

    public void updateLike(Likes like){
        // 1. 동일한 상태값이 존재할 경우 예외

        // 2. 상태값이 존재하지만 다른 상태값(false)일 경우, 기존 상태값을 삭제하고, 새로운 상태값(true)추가

        // 3. 상태값이 없다면 추가
    }


}
