package com.example.testuni.service;

import com.example.testuni.factory.ProductFactory;
import com.example.testuni.model.Product;
import com.example.testuni.repository.ProductRepository;
import com.example.testuni.service.utils.FindProductService;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

@ExtendWith(MockitoExtension.class)
public class RemoveProductServiceTest {

    @InjectMocks
    private RemoveProductService removeProductService;

    @Mock
    private ProductRepository productRepository;

    @Mock
    private FindProductService findProductService;

    @Test
    @DisplayName("Must remove product")
    void testRemoveProduct() {
        Product product = ProductFactory.getBuilder().build();
        Long productId = product.getId();

        when(findProductService
                .byId(productId))
                .thenReturn(product);

        removeProductService.remove(productId);

        verify(productRepository).delete(product);
    }
}
