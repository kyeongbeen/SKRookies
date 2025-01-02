package com.example.demo_sc.service;

import com.example.demo_sc.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestParam;

/**
 *  - Spring Security 에서 유저의 인증정보등을 관리하는 객체
 *      - 인증, 권한 등 과 관련된 비즈니스 로직을 처리
 *      - 해당 유저가 회원인지 체크
 *      - 로그인에 관련된 쿼리 요구가 시도
 */
@Service
@RequiredArgsConstructor
public class UserDetailService implements UserDetailsService {
    private final UserRepository userRepository;

    // userName을 이용하여 회원조회
    // userName -> Entity -> email 로 설정되어 있음(getUserName() 메소드 참고)
    @Override
    public UserDetails loadUserByUsername(String usernameEmail) throws UsernameNotFoundException {
        System.out.println("사용자 정보 전달 : " + usernameEmail);
        return userRepository.findByEmail(usernameEmail)
                .orElseThrow(() -> new IllegalArgumentException(usernameEmail));

    }
}
