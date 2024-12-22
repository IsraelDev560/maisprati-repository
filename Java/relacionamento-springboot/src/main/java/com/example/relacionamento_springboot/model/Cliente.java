package com.example.relacionamento_springboot.model;

import jakarta.persistence.*;
import lombok.Data;
import lombok.Generated;
import org.hibernate.annotations.GenericGenerator;
import org.springframework.context.annotation.Primary;

import java.util.UUID;

@Entity
@Data
public class Cliente {
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private UUID id;
    private String nome;
    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "conta_id", referencedColumnName = "id")
    private Conta conta;

  // jeito vei
//    @GeneratedValue(generator = "UUID")
//    @GenericGenerator(
//            name= "UUID",
//            strategy = "org.hibernate.id.uuid.UuidGenerator"
//    )


}
