package com.example.demo_sc.controller;

import com.example.demo_sc.dto.UserDTO;
import com.example.demo_sc.service.UserService;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.web.authentication.logout.SecurityContextLogoutHandler;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;

/**
 *  - 로그인, 회원가입 -> 인증없이 가능
 *  - 로그아웃 -> 인증해야만 가능
 *  - 시나리오
 *      - 회원가입 -> 로그인 -> 홈페이지 자동이동 -> 로그아웃 -> 로그인 페이지
 */
@Controller
@RequiredArgsConstructor
public class UserController {
    private final UserService userService;

    @GetMapping("/login")
    public String home() {
        return "login";
    }

    @GetMapping("/signup")
    public String signup() {
        return "signup";
    }

    @PostMapping("/signup_process")
    public String signupProcess(UserDTO userDTO) {
        System.out.println("회원가입용 데이터 전달 : " + userDTO.toString());
        userService.create(userDTO);
        return "redirect:/login";
    }

    @GetMapping("/logout")
    public String logout(HttpServletRequest request, HttpServletResponse response) {
        // 인증해제(로그아웃), 요청, 응답,현재사용자으 인증정보 전달
        new SecurityContextLogoutHandler().logout(request, response,
                SecurityContextHolder.getContext().getAuthentication());
        // 로그인 페이지로 redirection
        return "redirect:/login";
    }
}
