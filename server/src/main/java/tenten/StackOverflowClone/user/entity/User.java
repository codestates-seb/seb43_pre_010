package tenten.StackOverflowClone.user.entity;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import tenten.StackOverflowClone.answer.entity.Answer;
import tenten.StackOverflowClone.question.entity.Question;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Getter
@Setter
@NoArgsConstructor
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long userId;

    private String name;

    private String email;

    private String password;

    private String roles;

    @Enumerated(value = EnumType.STRING)
    @Column(nullable = false)
    private UserStatus userStatus;

    public User(String name, String email, String password) {
        this.name = name;
        this.email = email;
        this.password = password;
    }

    @OneToMany(mappedBy = "user")
    private List<Question> questions = new ArrayList<>();

    @OneToMany(mappedBy = "user")
    private List<Answer> answers = new ArrayList<>();

    public enum UserStatus{

        USER_ACTIVE("활동중"),
        USER_SLEEP("휴면 상태"),
        USER_QUIT("탈퇴 상태");

        @Getter
        private String status;

        UserStatus(String status) {
            this.status = status;
        }
    }
}
