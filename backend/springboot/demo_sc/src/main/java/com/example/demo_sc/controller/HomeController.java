package com.example.demo_sc.controller;

import com.example.demo_sc.util.AuthUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

import java.security.Principal;

/**
 * - 인증후에만 볼 수 있음
 */
@Controller
public class HomeController {
    @Autowired
    private AuthUtil authUtil;

    @GetMapping("/")
    // UserDetails 객체에 @Authentication 적용하여 현재 인증정보 삽입
    public String home(@AuthenticationPrincipal UserDetails userDetails, Principal principal) {
        // Controller 내부(또는 parameter 추가하여)에서 인증정보 체크, 접근 확인
        if (userDetails != null) System.out.println(userDetails.getUsername());
        if (principal != null) System.out.println(principal.getName());
        // Controller 이외의 java 코드에서 인증 정보 체크, 접근 확인
        System.out.println(authUtil.getUserName());
        System.out.println(authUtil.isUserAuthenticated());
        return "index";
    }
}
