package com.example.demo_sc.config;

import com.example.demo_sc.service.UserDetailService;
import lombok.RequiredArgsConstructor;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityCustomizer;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;

import static org.springframework.boot.autoconfigure.security.servlet.PathRequest.toH2Console;

/**
 * - Spring Security 의 정책, 보안 설정 등을 기술
 */
@Configuration
@RequiredArgsConstructor
public class AppSecurityConfig {
    // DI : 무한 순환 참조 문제 발생가능성 있음 -> @Autowired, @RequiredArgsConstructor 섞어서 사용

    private final UserDetailsService userDetailsService;

    //  2. 전체 페이지 권한 여부 설정(가장 중요)
    //      - 인증이 필요한 페잊, 필요없는 페이지 등 설정
    //      - 로그인 페이지, 성공후 포워딩 페이지 등 지정
    //      - 로그아웃 등 추가 처리
    //      - csrf 공격 대응 처리
    //      - 기타 필요 처리 ...
    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        return http
                // 1. 인증이 필요한 페이지와 아닌 페이지
                .authorizeRequests()
                .requestMatchers("/login", "/signup", "/signup_process").permitAll() // 서술한 페이지 인증필요 없음
                .anyRequest().authenticated() // 나머지 모든 페이지 인증 필요
                .and()

                // 2. 로그인 페이지, 로그인 성공 후 포워딩 페이지 지정
                .formLogin()
                .loginPage("/login") // 커스텀 로그인 페이지로 포워딩
                .defaultSuccessUrl("/") // 성공시 홈페이지로 포워딩
                .and()

                // 3. 로그아웃 처리, 등 추가 처리
                .logout()
                    .logoutSuccessUrl("/login") // 인증 없이는 접근이 안되도록 구성 -> 재 로그인 필요하게 구성
                .invalidateHttpSession(true)
                .and()

                // 4. csrf 공격 대응 처리
                .csrf() // 활성화 되면 form 태그 아래 해당 값에 대한 설정 필요(hidden 타입으로)
                .disable() // csrf 대응 처리 안 함(disable() 메소드) -> 추후 활성화

                .build();
    }

    //  3. 로그인 처리
    //      - 인증 매니저 객체가 담당, singleton 으로 구성할 것
    //      - 인증 관리자 객체 필요 -> 빈 구성 -> DI 가능
    //      - 비밀번호 암호화 설정
    //      - 디비와 연동되는 실제적인 로그인 처리 -> 비즈니스 로직 -> 서비스 등록
    //      - 1개의 객채가 필요한데 service X, repository X -> Config 내부의 Bean or Component
    @Bean
    public AuthenticationManager authenticationManager(HttpSecurity httpSecurity,
                                                           BCryptPasswordEncoder bCryptPasswordEncoder,
                                                           UserDetailsService userDetailsService) throws Exception {
        System.out.println("인증 관리자 등록 여부 체크");
        return httpSecurity.getSharedObject(AuthenticationManagerBuilder.class)
                // DB 에서 존재여부를 체크
                .userDetailsService(this.userDetailsService)
                .passwordEncoder(bCryptPasswordEncoder)
                .and()
                .build();

    }

    //  4. 암호화 관련 모듈 필요 -> 빈 구성 -> DI 가능
    //      - 사용자 -> 비밀번호 입력 -> Encryption(hash)
    @Bean
    public BCryptPasswordEncoder bCryptPasswordEncoder() {
        return new BCryptPasswordEncoder();
    }



    //  1. 예외처리 -> 인증에 상관없이 원래 사용하던대로 자유롭게 접근 가능
    //      - h2 console
    //      - 정적데이터 -> resouce/static/js|css|image ...
    @Bean
    public WebSecurityCustomizer webSecurityCustomizer() {
        return webSecurity -> webSecurity.ignoring()
                .requestMatchers(toH2Console()) // ~/h2-console
                .requestMatchers("/static/**"); // 정적데이터 모든것

    }



}
