package com.example.demoex.service;

import com.example.demoex.dto.PostDTO;
import com.example.demoex.dto.ReviewDTO;
import com.example.demoex.entity.Review;
import com.example.demoex.repository.ReviewRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class ReviewService {
    private final ReviewRepository reviewRepository;

    public void create(String content, PostDTO post) {
        reviewRepository.save(Review.builder()
                                    .content(content)
                                    .createDate(LocalDateTime.now())
                                    .post(post.toEntity())
                                    .build());
        System.out.println(content);
    }

    public ReviewDTO getOneReview(Integer id) {
        Optional<Review> optionalReview = reviewRepository.findById(id);
            return optionalReview.map(review -> ReviewDTO.builder()
                    .id(review.getId())
                    .content(review.getContent())
                    .createDate(review.getCreateDate())
                    .post(review.getPost())
                    .build()).orElse(null);
    }

    public void delete(ReviewDTO reviewDTO) {
        reviewRepository.delete(reviewDTO.toEntity());
    }

    public void modify(ReviewDTO reviewDTO) {
        reviewRepository.save(reviewDTO.toEntity());
    }
}
