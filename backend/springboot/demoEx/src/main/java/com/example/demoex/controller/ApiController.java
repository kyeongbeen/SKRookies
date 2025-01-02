package com.example.demoex.controller;

import com.example.demoex.dto.NewsDTO;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * json, xml 을 return
 */

@RestController
public class ApiController {

    @GetMapping("/api")
    public NewsDTO api() {
        return NewsDTO.builder()
                .title("스포츠뉴스")
                .content("토트넘 리버풀 경기")
                .author("기자")
                .build();
    }
}
