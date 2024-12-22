package com.example.relacionamento_springboot.repository;

import com.example.relacionamento_springboot.model.Cliente;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

public interface ClienteRepository extends JpaRepository<Cliente, UUID> {
}
