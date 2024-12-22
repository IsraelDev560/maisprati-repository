package com.example.api_user.service;

import com.example.api_user.model.User;
import com.example.api_user.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class CustomUserDetailsService implements UserDetailsService {
    @Autowired
    private UserRepository userRepository;
    @Override
    public UserDetails loadUserByUsername(String nome) throws UsernameNotFoundException {
        User user = userRepository.findByNome(nome);
        if (user == null){
            throw new UsernameNotFoundException("Usuário não encontrado: " + nome);
        }
        return org.springframework.security.core.userdetails.User.withUsername(user.getNome()).password(user.getSenha()).build();
    }
    public UserDetails loadUserById(String id) throws UsernameNotFoundException {
        Optional<User> optionalUser = userRepository.findById(Integer.valueOf(id));
        if (!optionalUser.isPresent()){
            throw new UsernameNotFoundException("Usuário não encontrado: " + id);
        }
        User user = optionalUser.get();
        return org.springframework.security.core.userdetails.User.withUsername(user.getNome()).password(user.getSenha()).build();
    }
}

