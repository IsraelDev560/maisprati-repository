package com.example.testuni.controller;

import com.example.testuni.request.ProductRequest;
import com.example.testuni.response.ProductResponse;
import com.example.testuni.service.AddProductService;
import com.example.testuni.service.GetProductService;
import com.example.testuni.service.RemoveProductService;
import com.example.testuni.service.UpdateProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/products")
public class ProductsController {
    @Autowired
    private AddProductService addProductService;

    @Autowired
    private UpdateProductService updateProductService;

    @Autowired
    private RemoveProductService removeProductService;

    @Autowired
    private GetProductService getProductService;

    @GetMapping
    public Page<ProductResponse> list(Pageable pageable){
        return getProductService.list(pageable);
    }

    @PostMapping
    public ProductResponse add(@RequestBody ProductRequest request){
        return addProductService.add(request);
    }

    @PutMapping("/{id}")
    public ProductResponse update(@PathVariable Long id, @RequestBody ProductRequest request){
        return updateProductService.update(id, request);
    }

    @DeleteMapping("/{id}")
    public void remove(@PathVariable Long id){
        removeProductService.remove(id);
    }
}
