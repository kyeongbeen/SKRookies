package com.example.demoex.controller;

import com.example.demoex.dto.ReviewDTO;
import com.example.demoex.form.ReviewForm;
import com.example.demoex.service.PostService;
import com.example.demoex.service.ReviewService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

@Controller
@RequiredArgsConstructor
@RequestMapping("/review")
public class ReviewController {

    private final ReviewService reviewService;
    private final PostService postService;

    @PostMapping("/create/{id}")
    public String create(@RequestParam String content, @PathVariable Integer id) {
        reviewService.create(content, postService.getOnePost(id));
        return "redirect:/post/detail/" + id;
    }

    @GetMapping("/list")
    public String list() {
        return "list";
    }

    /** 리뷰수정, 검증폼을 활용, 화면세팅까지 */
    @GetMapping("/modify/{reviewId}")
    public String modify(@PathVariable Integer reviewId, ReviewForm reviewForm) {
        ReviewDTO reviewDTO = reviewService.getOneReview(reviewId);
        reviewDTO.setContent(reviewForm.getContent());
        return "board/review_form";
    }
    /** 변경값 DB에 쓰기 */
    @PostMapping("/modify/{reviewID}")
    public String modify(@PathVariable Integer reviewID, @Valid ReviewForm reviewForm, BindingResult bindingResult) {
        if (bindingResult.hasErrors()) {
            return "board/review_form";
        }
        ReviewDTO reviewDTO = reviewService.getOneReview(reviewID);
        reviewDTO.setContent(reviewForm.getContent());
        reviewService.modify(reviewDTO);
        return "redirect:/post/detail/" + reviewDTO.getPost().getId();
    }

    @GetMapping("/delete/{id}")
    public String delete(@PathVariable Integer id) {
        ReviewDTO reviewDTO = reviewService.getOneReview(id);
        reviewService.delete(reviewDTO);
        return "redirect:/post/detail/" + reviewDTO.getPost().getId();
    }
}
