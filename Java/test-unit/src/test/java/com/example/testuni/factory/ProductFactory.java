package com.example.testuni.factory;

import com.example.testuni.model.Product;

public class ProductFactory {
    public static Product.ProductBuilder getBuilder(){
        return Product.builder()
                .id(SimpleFactory.getRandomLong())
                .description("Product Description")
                .name("Product Name")
                .quantity(5)
                ;
    }
}
