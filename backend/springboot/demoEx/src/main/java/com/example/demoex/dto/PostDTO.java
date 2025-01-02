package com.example.demoex.dto;

import com.example.demoex.entity.Post;
import com.example.demoex.entity.Review;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import java.time.LocalDateTime;
import java.util.List;


@Getter @Setter @ToString @Builder
public class PostDTO {
    private int id;
    private String subject;
    private String content;
    private LocalDateTime createDate;
    private List<Review> reviews;

    public Post toEntity() {
        return Post.builder()
                .id(this.id)
                .subject(this.subject)
                .content(this.content)
                .createDate(this.createDate)
                .reviews(this.reviews)
                .build();
    }
}
