package tenten.StackOverflowClone.exception;

import lombok.Getter;

public enum ExceptionCode {

    /*
    TODO: 예외 코드 필요 시 상황에 맞게 추가할 것.
      - 401 Unauthorized, 403 Forbidden, 404 Not Found
      - 500 Internal Server Error, 502 Bad Gateway
    */

    MEMBER_NOT_FOUND(404, "Member not found"),
    MEMBER_EXIST(409, "Member exist"),
    QUESTION_NOT_FOUND(404, "Question not found"),
    CANNOT_CHANGE_QUESTION(403, "Question can not change"),
    CANNOT_READ_QUESTION(403, "Question can not read");

    @Getter
    private int status;

    @Getter
    private String message;

    ExceptionCode(int status, String message) {
        this.status = status;
        this.message = message;
    }
}
