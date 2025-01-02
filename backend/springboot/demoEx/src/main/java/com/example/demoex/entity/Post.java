package com.example.demoex.entity;

import jakarta.persistence.*;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDateTime;
import java.util.List;

@Entity
@Setter @Getter
@NoArgsConstructor
public class Post {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    @Column(length = 256)
    private String subject;

    @Column(columnDefinition = "TEXT")
    private String content;

    private LocalDateTime createDate;

    @OneToMany(mappedBy = "post", cascade = CascadeType.REMOVE)
    private List<Review> reviews;

    @Builder
    public Post(int id, String subject, String content, LocalDateTime createDate, List<Review> reviews) {
        this.id = id;
        this.subject = subject;
        this.content = content;
        this.createDate = createDate;
        this.reviews = reviews;
    }
}
