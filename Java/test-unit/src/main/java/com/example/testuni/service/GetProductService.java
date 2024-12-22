package com.example.testuni.service;

import com.example.testuni.mapper.ProductMapper;
import com.example.testuni.repository.ProductRepository;
import com.example.testuni.response.ProductResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

public class GetProductService {
    @Autowired
    private ProductRepository productRepository;

    public Page<ProductResponse> list(Pageable pageable) {
        Page<ProductResponse> products = productRepository
                .findAll(pageable)
                .map(ProductMapper::toReponse);

        return products;
    }
}
