package com.example.relacionamento_springboot.repository;

import com.example.relacionamento_springboot.model.Conta;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ContaRepository extends JpaRepository<Conta, Long> {
}
