package com.example.api_user.service;

import com.example.api_user.dto.UserDTO;
import com.example.api_user.model.User;
import com.example.api_user.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    public List<UserDTO> getAllUsers(){
        return userRepository
                .findAll()
                .stream()
                .map(this::convertToDTO)
                .collect(Collectors.toList());
    }

    public UserDTO getUserById(int id){
        Optional<User> user = Optional.ofNullable(userRepository.findById(id));
        return user.map(this::convertToDTO).orElse(null);
    }

    public UserDTO createUser(UserDTO userDTO){
        User user = new User();
        user.setNome(userDTO.getNome());
        user.setEmail(userDTO.getEmail());
        user.setCargo(userDTO.getCargo());
        user.setSenha(new BCryptPasswordEncoder().encode(userDTO.getSenha()));
        userRepository.save(user);

        return convertToDTO(user);
    }

    public UserDTO updateUser(int id, UserDTO userDTO){
        Optional<User> userOptional = Optional.ofNullable(userRepository.findById(id));
        if(userOptional.isPresent()){
            User user = userOptional.get();
            user.setNome(userDTO.getNome());
            user.setEmail(userDTO.getEmail());
            user.setCargo(userDTO.getCargo());
            user.setSenha(new BCryptPasswordEncoder().encode(userDTO.getSenha()));
            userRepository.save(user);
            return convertToDTO(user);
        }
        return null;
    }

    public void deleteUser(int id){
        userRepository.deleteById(id);
    }

    private UserDTO convertToDTO(User user){
        UserDTO userDTO = new UserDTO();
        userDTO.setId(user.getId());
        userDTO.setNome(user.getNome());
        userDTO.setEmail(user.getEmail());
        userDTO.setCargo(user.getCargo());

        return userDTO;
    }
}

