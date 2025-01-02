package com.example.demo_sc.util;

import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Component;

/**
 * - 인증정보, 권한 정보를 체크하는등의 기능을 가진 메소드를 제공
 */
@Component
public class AuthUtil {
    // 서브에 구성하는 메소드 -> DI 선언후 메소드 사용
    public boolean isUserAuthenticated() {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        return authentication != null && authentication.isAuthenticated();
    }

    public String getUserName() {
        if(isUserAuthenticated()) return SecurityContextHolder.getContext().getAuthentication().getName();
        return null;
    }

}
