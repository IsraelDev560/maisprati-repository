package com.example.relacionamento_springboot.controller;

import com.example.relacionamento_springboot.model.Pedido;
import com.example.relacionamento_springboot.service.PedidoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/pedidos")
public class PedidoController {
    @Autowired
    private PedidoService pedidoService;

    @PostMapping
    public ResponseEntity<Pedido> criarPedido(@RequestBody Pedido pedido){
        Pedido pedidoSalvo = pedidoService.salvarPedidoComProdutos(pedido);
        return ResponseEntity.ok(pedidoSalvo);
    }
    @GetMapping
    public ResponseEntity<List<Pedido>> buscarPedido(){
        List<Pedido> pedidos = pedidoService.listarPedidos();

        return ResponseEntity.ok(pedidos);
    }
    @GetMapping("/{id}")
    public ResponseEntity<Pedido> buscarPedidoPorId(@PathVariable Long id){
        Pedido pedido = pedidoService.buscarPedido(id);
        if(pedido != null){
            return ResponseEntity.ok(pedido);
        }  return ResponseEntity.notFound().build();
    }
}
