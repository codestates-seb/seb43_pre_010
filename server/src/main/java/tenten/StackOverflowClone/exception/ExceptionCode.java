package tenten.StackOverflowClone.exception;

import lombok.Getter;

public enum ExceptionCode {

    /*
    TODO: 예외 코드 필요 시 상황에 맞게 추가할 것.
      - 401 Unauthorized, 403 Forbidden, 404 Not Found
      - 500 Internal Server Error, 502 Bad Gateway
    */

    USER_NOT_FOUND(404, "User not found"),
    DELETED_USER(404, "Deleted User"),
    USER_EXIST(409, "User exist"),
    QUESTION_NOT_FOUND(404, "Question not found"),
    CANNOT_CHANGE_QUESTION(403, "Question cannot change"),
    CANNOT_READ_QUESTION(403, "Question cannot be read"),
    CANNOT_DELETE_QUESTION(403, "Question cannot be deleted"),
    ALREADY_DELETED_QUESTION(410, "Question is already deleted"),
    NOT_IMPLEMENTATION(501, "Not Implementation"),
    ANSWER_NOT_FOUND(404, "Answer not found"),
    SAME_LIKE_EXIST(409, "Same Status Like Exist");

    @Getter
    private int status;

    @Getter
    private String message;

    ExceptionCode(int status, String message) {
        this.status = status;
        this.message = message;
    }
}
