package com.example.demoex.controller;

import com.example.demoex.dto.NewsDTO;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

/**
 * SSR(Server Side Rendering, Spring) <-> CSR(Client Side Rendering, React)
 */

@Controller
public class HomeController {
    @GetMapping("/")
    public String home() {
        // @Controller, thymeleaf 포함시
        // return "index"; -> index.html 을 찾아서 렌더링, return 한다
        // index.html -> src/main/resource/templates 에 생성
        NewsDTO newsDTO = NewsDTO.builder()
                .title("스포츠뉴스")
                .content("토트넘 리버풀 경기")
                .author("KyeongBin")
                .build();
        System.out.println(newsDTO.toString());
        System.out.println(newsDTO.getTitle());
        System.out.println(newsDTO.getContent());
        System.out.println(newsDTO.getAuthor());
        newsDTO.setContent("3:6");
        System.out.println(newsDTO.getContent());
        return "index";
    }

    @GetMapping("/test/news/sports")
    public String sports() {
        return "sports";
    }

//    http://localhost:8080/news?id=242323476&serviceType=video
    @GetMapping("/news/{nid}")
    @ResponseBody
    public String news(@PathVariable("nid") String nid,
                       @RequestParam(value = "id") String id, @RequestParam(value = "serviceType") String serviceType) {
        return nid + " <- news" + id + " " + serviceType;
    }

    @GetMapping("/dashboard")
    public String dashboard() {
        return "board/post_list";
    }

    /**
     * Thymeleaf 템플릿 분할, 조립 연습용 페이지
     * html 을 분할하여 공통부분 조립하는 단위 테스트
     */

    @GetMapping("/test/layout")
    public String layout() {
        return "ui/index";
    }

}
