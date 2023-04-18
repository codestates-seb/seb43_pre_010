package tenten.StackOverflowClone.answer.entity;


import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import tenten.StackOverflowClone.auditing.Auditable;

import javax.persistence.*;

@NoArgsConstructor
@Setter
@Getter
@Entity
public class Answer extends Auditable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String content;

//    @ManyToOne
//    @JoinColumn(name = "QUESTION_ID")
//    private Question question;

//    @ManyToOne
//    @JoinColumn(name = "USER_ID")
//    private User user;

    // 기본 값은 0으로 설정해야한다
    @Column(nullable = false)
    private int scoreCount = 0;

    @Enumerated(value = EnumType.STRING)
    @Column(nullable = false)
    private AnswerStatus answerStatus = AnswerStatus.ANSWER_REGISTRATION;


    public enum AnswerStatus {

        ANSWER_REGISTRATION("답변 등록"),
        ANSWER_DELETE("답변 삭제");

        @Getter
        private String status;

        AnswerStatus(String status) {
            this.status = status;
        }
    }




}
