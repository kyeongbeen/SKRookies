package com.example.demoex.dto;

import com.example.demoex.entity.Post;
import com.example.demoex.entity.Review;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import java.time.LocalDateTime;

@Getter @Setter @ToString @Builder
public class ReviewDTO {
    private int id;
    private String content;
    private LocalDateTime createDate;
    private Post post;

    public Review toEntity() {
        return new Review().builder()
                .id(this.id)
                .content(this.content)
                .createDate(this.createDate)
                .post(this.post)
                .build();
    }
}
