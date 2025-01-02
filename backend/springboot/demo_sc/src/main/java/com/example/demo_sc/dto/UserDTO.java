package com.example.demo_sc.dto;


import com.example.demo_sc.entity.User;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

/**
 * - User Entity 와 데이터 교환
 * - DB, 통신(로그인, 회원가입) 모두 겸함
 */
@Getter @Setter
@ToString
public class UserDTO {
    private String email;
    private String password;

    public User toEntity() {
        return User.builder()
                .email(email)
                .password(password)
                .build();
    }
}
