package com.example.demo_sc.repository;

import com.example.demo_sc.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

/**
 * - 회원관련 SQL 지원
 */

@Repository
public interface UserRepository extends JpaRepository<User, Integer> {
    Optional<User> findByEmail(String usernameEmail);
}
