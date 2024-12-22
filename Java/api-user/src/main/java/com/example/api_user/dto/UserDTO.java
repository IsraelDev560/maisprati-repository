package com.example.api_user.dto;

import lombok.Data;

@Data
public class UserDTO {

    private int id;

    private String nome;

    private String email;

    private String cargo;

    private String senha;
}
