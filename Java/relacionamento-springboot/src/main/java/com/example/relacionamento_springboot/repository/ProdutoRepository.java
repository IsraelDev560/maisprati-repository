package com.example.relacionamento_springboot.repository;

import com.example.relacionamento_springboot.model.Produto;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProdutoRepository extends JpaRepository<Produto, Long> {
}
