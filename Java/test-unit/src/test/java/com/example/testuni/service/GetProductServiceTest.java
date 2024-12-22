package com.example.testuni.service;

import com.example.testuni.factory.ProductFactory;
import com.example.testuni.model.Product;
import com.example.testuni.repository.ProductRepository;
import com.example.testuni.response.ProductResponse;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;

import static org.junit.jupiter.api.Assertions.assertEquals;

import java.util.List;

import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

@ExtendWith(MockitoExtension.class)
public class GetProductServiceTest {
    @InjectMocks
    private GetProductService getProductService;

    @Mock
    private ProductRepository productRepository;

    @Test
    @DisplayName("Must return a page with one product")
    public void mustReturnAPageWithOneProduct(){

        Pageable pageable = PageRequest.of(0,5);

        List<Product> products = List.of(
                ProductFactory.getBuilder().build()
        );

        Page<Product> pageWithProduct = new PageImpl<>(products);

        when(productRepository.findAll(pageable)).thenReturn(pageWithProduct);

        Page<ProductResponse> responses = getProductService.list(pageable);

        verify(productRepository).findAll(pageable);
        assertEquals(products.size(),responses.getSize());
        assertEquals(products.get(0).getId(),responses.getContent().get(0).getId());
        assertEquals(products.get(0).getName(),responses.getContent().get(0).getName());
        assertEquals(products.get(0).getDescription(),responses.getContent().get(0).getDescription());
        assertEquals(products.get(0).getQuantity(),responses.getContent().get(0).getQuantity());
    }
}
