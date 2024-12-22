package com.example.testuni.service;

import com.example.testuni.model.Product;
import com.example.testuni.repository.ProductRepository;
import com.example.testuni.request.ProductRequest;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.ArgumentCaptor;
import org.mockito.Captor;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import static org.mockito.Mockito.verify;

@ExtendWith(MockitoExtension.class)
public class AddProductServiceTest {

    @InjectMocks
    private AddProductService addProductService;

    @Mock
    private ProductRepository productRepository;

    @Captor
    private ArgumentCaptor<Product> productCaptor;

    @Test
    @DisplayName("Must return appropriate product response")
    void mustReturnAppropriateProductResponse(){
        ProductRequest request = new ProductRequest();
        request.setName("test");
        request.setDescription("description");
        request.setQuantity(4);

        addProductService.add(request);

        verify(productRepository).save(productCaptor.capture());
    }
}
