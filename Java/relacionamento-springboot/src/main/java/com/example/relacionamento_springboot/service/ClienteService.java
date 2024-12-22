package com.example.relacionamento_springboot.service;

import com.example.relacionamento_springboot.model.Cliente;
import com.example.relacionamento_springboot.repository.ClienteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.UUID;

@Service
public class ClienteService {
    @Autowired
    private ClienteRepository clienteRepository;

    public Cliente salvarCliente(Cliente cliente){
        return clienteRepository.save(cliente);
    }
    public Cliente buscarCliente(UUID id){
        return clienteRepository.findById(id).orElse(null);
    }
}
