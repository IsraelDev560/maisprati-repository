package com.example.testuni.service;

import com.example.testuni.mapper.ProductMapper;
import com.example.testuni.model.Product;
import com.example.testuni.repository.ProductRepository;
import com.example.testuni.request.ProductRequest;
import com.example.testuni.response.ProductResponse;
import com.example.testuni.service.utils.FindProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UpdateProductService {
    @Autowired
    private ProductRepository productRepository;

    @Autowired
    private FindProductService findProductService;

    public ProductResponse update(Long id, ProductRequest request) {
        Product product = findProductService.byId(id);

        product.setName(request.getName());
        product.setDescription(request.getDescription());
        product.setQuantity(request.getQuantity());

        productRepository.save(product);

        return ProductMapper.toReponse(product);
    }
}
