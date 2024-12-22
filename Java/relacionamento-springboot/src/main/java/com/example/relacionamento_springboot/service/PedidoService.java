package com.example.relacionamento_springboot.service;

import com.example.relacionamento_springboot.model.Cliente;
import com.example.relacionamento_springboot.model.Pedido;
import com.example.relacionamento_springboot.repository.PedidoRepository;
import com.example.relacionamento_springboot.repository.ProdutoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PedidoService {
    @Autowired
    private PedidoRepository pedidoRepository;

    @Autowired
    private ProdutoRepository produtoRepository;

    public Pedido salvarPedidoComProdutos(Pedido pedido){
        return pedidoRepository.save(pedido);
    }

    public List<Pedido> listarPedidos(){
        return pedidoRepository.findAll();
    }

    public Pedido buscarPedido(Long id){
        return pedidoRepository.findById(id).orElse(null);
    }
}
