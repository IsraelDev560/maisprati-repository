package com.example.testuni.service;

import com.example.testuni.mapper.ProductMapper;
import com.example.testuni.model.Product;
import com.example.testuni.repository.ProductRepository;
import com.example.testuni.request.ProductRequest;
import com.example.testuni.response.ProductResponse;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AddProductService {

    @Autowired
    private ProductRepository productRepository;


    @Transactional
    public ProductResponse add(ProductRequest request) {
        Product product = ProductMapper.toEntity(request);

        productRepository.save(product);

        return ProductMapper.toReponse(product);
    }
}
