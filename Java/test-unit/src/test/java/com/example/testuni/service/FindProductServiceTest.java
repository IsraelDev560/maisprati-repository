package com.example.testuni.service;

import com.example.testuni.factory.ProductFactory;
import com.example.testuni.model.Product;
import com.example.testuni.repository.ProductRepository;
import com.example.testuni.service.utils.FindProductService;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.web.server.ResponseStatusException;

import java.util.Optional;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

@ExtendWith(MockitoExtension.class)
public class FindProductServiceTest {

    @InjectMocks
    private FindProductService findProductService;

    @Mock
    private ProductRepository productRepository;

    @Test
    @DisplayName("Must return a valid product")
    void mustReturnAValidProduct(){
        Product product = ProductFactory.getBuilder().build();
        when(productRepository
                .findById(product.getId()))
                .thenReturn(Optional.of(product));

        Product foundProduct = findProductService.byId(product.getId());

        verify(productRepository).findById(product.getId());

        assertEquals(foundProduct,product);
    }

    @Test
    @DisplayName("Must return an error")
    void mustReturnAnError(){
        ResponseStatusException exception = (ResponseStatusException) Assertions
                .assertThrows(ResponseStatusException.class, () -> {
                   findProductService.byId(null);
                });
        Assertions.assertEquals("Product Not Found", exception.getReason());
    }
}
