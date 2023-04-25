package tenten.StackOverflowClone.answer.entity;


import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import tenten.StackOverflowClone.user.entity.User;

import javax.persistence.*;

@NoArgsConstructor
@Setter
@Getter
@Entity
public class AnswerLike {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long LikesId;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;

    @ManyToOne
    @JoinColumn(name = "answer_id")
    private Answer answer;

    @Column
    private Boolean status;

    //@Column(name = likes)
    //private Boolean like;

}
