package com.example.demoex.form;

import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.Size;
import lombok.Getter;
import lombok.Setter;

@Getter @Setter
public class ReviewForm {
    @NotEmpty(message = "리뷰를 입력해주세요!")
    @Size(min=2, max=256)
    private String content;
}
