package com.example.testuni.service;

import com.example.testuni.model.Product;
import com.example.testuni.repository.ProductRepository;
import com.example.testuni.service.utils.FindProductService;
import org.springframework.beans.factory.annotation.Autowired;

public class RemoveProductService {
    @Autowired
    private ProductRepository productRepository;

    @Autowired
    private FindProductService findProductService;

    public void remove(Long id) {
        Product product = findProductService.byId(id);

        productRepository.delete(product);
    }
}
