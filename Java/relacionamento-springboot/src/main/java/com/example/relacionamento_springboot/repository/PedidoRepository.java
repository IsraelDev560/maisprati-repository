package com.example.relacionamento_springboot.repository;

import com.example.relacionamento_springboot.model.Pedido;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PedidoRepository extends JpaRepository<Pedido, Long> {
}
