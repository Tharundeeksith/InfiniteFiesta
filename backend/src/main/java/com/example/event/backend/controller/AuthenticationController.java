package com.example.event.backend.controller;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.event.backend.dto.request.AuthenticationRequest;
import com.example.event.backend.dto.request.RegisterRequest;
import com.example.event.backend.dto.response.AuthenticationResponse;
import com.example.event.backend.dto.response.RegisterResponse;
import com.example.event.backend.model.User;
import com.example.event.backend.service.AuthenticationService;

import lombok.RequiredArgsConstructor;



@RestController
@CrossOrigin("*")
@RequestMapping("/api/v1/auth")
@RequiredArgsConstructor
public class AuthenticationController {

    private final AuthenticationService authenticationService;

    @PostMapping("/register")
    public ResponseEntity<RegisterResponse> register(@RequestBody RegisterRequest request) {
        return ResponseEntity.ok(authenticationService.register(request));
    }

    @PostMapping("/authenticate")
    public ResponseEntity<AuthenticationResponse> authenticate(@RequestBody AuthenticationRequest request) {
        return ResponseEntity.ok(authenticationService.authenticate(request));
    }
    
    @GetMapping("/details")
    public List<User> getData(){
    	return authenticationService.getData();
    }
    @DeleteMapping("/{id}")
    public boolean deleteById(@PathVariable long id){
        return authenticationService.deleteById(id);
    }

    
}