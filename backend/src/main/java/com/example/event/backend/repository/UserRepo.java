package com.example.event.backend.repository;



import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.event.backend.model.User;



public interface UserRepo extends JpaRepository<User, Long> {
    Optional<User> findByEmail(String email);
}
