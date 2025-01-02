package com.example.demoex.form;

import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.Size;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

/**
 * 글 작성하는 입력폼에 대한 백엔드단에서 유효성 검사용 클래스
 *   - 제약조건 부여, 값이 없는 것, 값의 길이 등
 *   - 본글은 제목, 본문 체크
 */

@Getter @Setter @ToString
public class PostForm {

    @NotEmpty(message = "제목을 입력해주세요!") // message == errorMessage
    @Size(max = 256)
    private String subject;

    @NotEmpty(message = "본문을 입력해주세요!")
    private String content;

}
