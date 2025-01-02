package com.example.demoex.dto;

import lombok.*;

@Data
@Getter @Setter @Builder
@ToString
public class NewsDTO {
    // title, content, author 로 구성
    private String title;
    private String content;
    private String author;
}
