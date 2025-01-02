package com.example.demoex.service;

import com.example.demoex.dto.PostDTO;
import com.example.demoex.entity.Post;
import com.example.demoex.repository.PostRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class PostService {
    @Autowired
    private PostRepository postRepository;


    public List<PostDTO> findAllPost() {
        List<Post> posts = postRepository.findAll();
        List<PostDTO> postDTOs = new ArrayList<>();
        for (Post post : posts) {
            postDTOs.add(PostDTO.builder()
                    .id(post.getId())
                    .content(post.getContent())
                    .subject(post.getSubject())
                    .createDate(post.getCreateDate())
                    .reviews(post.getReviews())
                    .build());
        }
        return postDTOs;
    }

    public PostDTO getOnePost(Integer id) {
        Optional<Post> optionalPost = postRepository.findById(id);
        return optionalPost.map(post -> PostDTO.builder()
                .id(post.getId())
                .content(post.getContent())
                .subject(post.getSubject())
                .createDate(post.getCreateDate())
                .reviews(post.getReviews())
                .build()).orElse(null);
    }

    /** savePost() 와 create() 메소드는 결론적으로 같은 함수이지만 service 단 에서 보다 편하게 관리할 수 있다 */
    public void savePost(String subject, String content) {
        Post post = Post.builder()
                .subject(subject)
                .content(content)
                .createDate(LocalDateTime.now())
                .build();
        postRepository.save(post);
    }

    public void create(PostDTO postDTO) {
        postRepository.save(postDTO.toEntity());
    }

    public void modify(PostDTO postDTO) {
        postRepository.save(postDTO.toEntity());
    }

    public void delete(PostDTO postDTO) {
        postRepository.delete(postDTO.toEntity());
    }
}
