package com.example.demoex;

import com.example.demoex.dto.NewsDTO;
import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;

/**
 * 개발한 모듈, 팥파트, 로직 등 테스트 가능
 * CI 중 자동테스트 가능
 * 서버 중단 후 작동, 다시 작동시 적용 클래스 교체 필요
 */

@SpringBootTest
class DemoExApplicationTests {

    // @Test : 테스트용 메소드로 지정
    @Test
    void contextLoads() {
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
    }

}
