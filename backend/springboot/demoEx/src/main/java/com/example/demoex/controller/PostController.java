package com.example.demoex.controller;

import com.example.demoex.dto.PostDTO;
import com.example.demoex.form.PostForm;
import com.example.demoex.service.PostService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.util.List;

@Controller
@RequestMapping("/post")
public class PostController {
    // DI(Dependency Injection) 3가지 방식 (@Autowired, constructor, setter)
    @Autowired
    private PostService postService;

    @GetMapping("/list")
    public String list(Model model) {
        List<PostDTO> posts = postService.findAllPost();
        for (PostDTO post : posts) {
            System.out.println(post.toString());
        }
        model.addAttribute("posts", posts);
        model.addAttribute("dummy", "hello");
        return "board/post_list";
    }

    @GetMapping("/create")
    public String create() {
        return "board/post_form";
    }
    @GetMapping("/create2")
    public String create2(PostForm postForm) {
        return "board/post_form";
    }

    /**
     * Overloading
     */
    @PostMapping("/create")
    public String create(@RequestParam String subject, @RequestParam String content) {
        // 1. 사용자가 전송한 데이터 추출 -> parameter 에서 받을 수 있음
        // 2. 서비스를 통해서 데이터 입력처리 요청
//        postService.savePost(subject, content);
        postService.create(PostDTO.builder()
                .subject(subject)
                .content(content)
                .createDate(LocalDateTime.now())
                .build());
        // 3. 처리 결과를 받아서 후속처리(200, 500, ...)
        // 4. 글이 추가 되었으므로 목록으로 포워딩
        return "redirect:/post/list";
    }

    /**
     * PostForm 객체에 데이터를 실어 요청을 받음
     * @Valid -> 검증 수행을 요청하는 annotation
     * @Valid -> 2번 인자로 BindingResult 를 동반 -> 동적으로 검증 결과를 반영한 객체
     */
    @PostMapping("/create2")
    public String create2(@Valid PostForm postForm, BindingResult bindingResult) {
        if (bindingResult.hasErrors()) {
            // 에러가 있으면 -> 입력폼으로 화면을 이동 -> PostForm 객체에 에러가 할당된 상태 -> 에러 표시
            // 글 등록 실패 -> 사용자는 액션수정 -> 다시 글 등록 시도
            return "board/post_form";
        }
        System.out.println(postForm.getSubject() + " " + postForm.getContent());
        postService.create(PostDTO.builder()
                .subject(postForm.getSubject())
                .content(postForm.getContent())
                .createDate(LocalDateTime.now())
                .build());

        // PostForm 을 parameter 로 받아서 html 렌더링 시 세팅 가능
        return "redirect:/post/list";
    }

    /**
     * id 번호에 따라 글을 조회, 상세보기 처리
     * @param id
     * @param model
     * @return
     */
    @GetMapping("/detail/{id}")
    public String detail(@PathVariable Integer id, Model model) {
        // 1. 파라미터 추출
        // 2. id 이용하여 postDTO 1개 추출
        PostDTO postDTO = postService.getOnePost(id);
        // 3. postDTO 를 model 에 적용하여 Thymeleaf 에 렌더링 요청
        model.addAttribute("post", postDTO);
        // 4. 응답 html 완료(상세 보기 완성)
        return "board/post_detail";
    }

    // 글 수정화면
    @GetMapping("/modify/{id}")
    public String modify(@PathVariable Integer id, PostForm postForm) {
        // 1. id에 해당하는 데이터 가져오기
        // 2. 화면세팅
        PostDTO postDTO = postService.getOnePost(id);
        postForm.setSubject(postDTO.getSubject());
        postForm.setContent(postDTO.getContent());
        return "board/post_form";
    }

    @PostMapping("/modify/{id}")
    public String modify(@PathVariable Integer id, @Valid PostForm postForm, BindingResult bindingResult) {
        if (bindingResult.hasErrors()) {
            return "board/post_form";
        }
        PostDTO postDTO = postService.getOnePost(id);
//        if (postDTO == null) {
//
//        }
        postDTO.setSubject(postForm.getSubject());
        postDTO.setContent(postForm.getContent());
        postService.modify(postDTO);
        return "redirect:/post/detail/" + id;
    }

    @GetMapping("/delete/{id}")
    public String delete(@PathVariable Integer id) {
        PostDTO postDTO = postService.getOnePost(id);
        postService.delete(postDTO);
        return "redirect:/post/list";
    }

}
