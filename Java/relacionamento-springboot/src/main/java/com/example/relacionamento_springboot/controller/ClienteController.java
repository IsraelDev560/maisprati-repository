package com.example.relacionamento_springboot.controller;

import com.example.relacionamento_springboot.model.Cliente;
import com.example.relacionamento_springboot.service.ClienteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.UUID;

@RestController
@RequestMapping("/clientes")
public class ClienteController {
    @Autowired
    private ClienteService clienteService;

    @PostMapping
    public ResponseEntity<Cliente> criarCliente(@RequestBody Cliente cliente){
        Cliente clienteSalvo = clienteService.salvarCliente(cliente);
        return ResponseEntity.ok(clienteSalvo);
    }

    @GetMapping("/{uuid}")
    public ResponseEntity<Cliente> buscarCliente(@PathVariable("uuid") UUID uuid){
        Cliente clienteEncontrado = clienteService.buscarCliente(uuid);
        if (clienteEncontrado != null){
            return ResponseEntity.ok(clienteEncontrado);
        }
        return ResponseEntity.notFound().build();
    }
}
