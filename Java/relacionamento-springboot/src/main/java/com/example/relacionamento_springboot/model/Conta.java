package com.example.relacionamento_springboot.model;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
public class Conta {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String numero;

    @OneToOne(mappedBy = "conta")
    private Cliente cliente;
}
