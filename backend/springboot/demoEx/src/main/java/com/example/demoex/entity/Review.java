package com.example.demoex.entity;

import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDateTime;

@Entity
@Getter @Setter @Builder
@NoArgsConstructor
public class Review {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(columnDefinition = "TEXT")
    private String content;

    private LocalDateTime createDate;

    @ManyToOne
    private Post post;

    @Builder
    public Review(int id, String content, LocalDateTime createDate, Post post) {
        this.id = id;
        this.content = content;
        this.createDate = createDate;
        this.post = post;
    }
}
