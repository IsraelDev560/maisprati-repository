package com.example.api_user.controller;

import com.example.api_user.dto.LoginDTO;
import com.example.api_user.dto.UserDTO;
import com.example.api_user.security.JwtTokenProvider;
import com.example.api_user.service.CustomUserDetailsService;
import com.example.api_user.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/auth")
public class AuthController {

    @Autowired
    private UserService service;

    private final AuthenticationManager authenticationManager;

    private final JwtTokenProvider jwtTokenProvider;

    private final UserDetailsService userDetailsService;

    public AuthController(AuthenticationManager authenticationManager, JwtTokenProvider jwtTokenProvider, UserDetailsService userDetailsService) {
        this.authenticationManager = authenticationManager;
        this.jwtTokenProvider = jwtTokenProvider;
        this.userDetailsService = userDetailsService;
    }
    @PostMapping("/login")
    public String login(@RequestBody LoginDTO loginDTO){
        try {
            String nome = loginDTO.getNome();
            String senha = loginDTO.getSenha();
            Authentication authentication = authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(nome, senha)
            );
            UserDetails user = (UserDetails) authentication.getPrincipal();
            return jwtTokenProvider.generateToken(user);
        } catch (AuthenticationException error){
            throw new RuntimeException("Invalid Credentials");
        }
    }
    @PostMapping("/register")
    public UserDTO createUser(@RequestBody UserDTO userDTO){
        return service.createUser(userDTO);
    }
}
