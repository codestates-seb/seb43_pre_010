package tenten.StackOverflowClone.question.entity;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import tenten.StackOverflowClone.user.entity.User;

import javax.persistence.*;

@Getter
@Setter
@NoArgsConstructor
@Entity
public class QuestionLike {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long questionLikeId;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "USER_ID")
    private User user;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "QUESTION_ID")
    private Question question;

    // true : 좋아요, false : 싫어요
    @Column(name = "likes")
    private Boolean like;

    // 연관 관계 편의 메서드(객체 관점에서 적용)
    public void setQuestion(Question question) {
        if (this.question != null) {
            this.question.getQuestionLikes().remove(this);
        }
        this.question = question;
        question.getQuestionLikes().add(this);
    }
}
