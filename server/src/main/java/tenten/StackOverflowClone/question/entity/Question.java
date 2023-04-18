package tenten.StackOverflowClone.question.entity;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import tenten.StackOverflowClone.answer.entity.Answer;
import tenten.StackOverflowClone.auditing.Auditable;
import tenten.StackOverflowClone.user.entity.User;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Getter
@Setter
@NoArgsConstructor
@Entity
public class Question extends Auditable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long questionId;

    @Column(length = 100, nullable = false)
    private String title;

    @Column(nullable = false)
    private String content;

    private Integer viewCount = 0;

    private Integer scoreCount = 0;

    @Enumerated(value = EnumType.STRING)
    @Column(length = 50, nullable = false)
    private QuestionStatus questionStatus = QuestionStatus.QUESTION_REGISTRATION;

    @ManyToOne
    @JoinColumn(name = "USER_ID")
    private User user;

    @OneToMany(mappedBy = "question")
    private List<Answer> answers = new ArrayList<>();

    // 연관관계 편의 메서드
    // JPA와 달리, 객체의 양방향 연관관계는 양쪽 모두 관계를 맺어주어야함
    public void setUser(User user) {
        if (this.user != null) {
            this.user.getQuestions().remove(this);
        }
        this.user = user;
        user.getQuestions().add(this);
    }

    public enum QuestionStatus {
        QUESTION_REGISTRATION("질문등록"),
        QUESTION_ANSWERED("답변완료"),
        QUESTION_DELETE("답변삭제");

        @Getter
        private String status;

        QuestionStatus(String status) {
            this.status = status;
        }
    }
}
