package com.example.demo_sc.service;

import com.example.demo_sc.dto.UserDTO;
import com.example.demo_sc.entity.User;
import com.example.demo_sc.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Repository;
import org.springframework.stereotype.Service;

/**
 *  - 일반적인 User 테이블과 연관된 비즈니스 로직 처리
 *      - 회원가입 등
 */
@Service
@RequiredArgsConstructor
public class UserService {
    private final UserRepository userRepository;
    private final BCryptPasswordEncoder bCryptPasswordEncoder;

    public void create(UserDTO userDTO) {
        userRepository.save(User.builder()
                .email(userDTO.getEmail())
                .password(bCryptPasswordEncoder.encode(userDTO.getPassword()))
                .build());
    }
}
