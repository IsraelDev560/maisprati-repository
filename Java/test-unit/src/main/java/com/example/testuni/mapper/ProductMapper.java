package com.example.testuni.mapper;

import com.example.testuni.model.Product;
import com.example.testuni.request.ProductRequest;
import com.example.testuni.response.ProductResponse;

public class ProductMapper {
    public static Product toEntity(ProductRequest request){
        Product product = new Product();
        product.setDescription(request.getDescription());
        product.setName(request.getName());
        product.setQuantity(request.getQuantity());

        return product;
    }

    public static ProductResponse toReponse(Product product){
        return ProductResponse.builder()
                .id(product.getId())
                .description(product.getDescription())
                .name(product.getName())
                .quantity(product.getQuantity())
                .build();
    }
}
