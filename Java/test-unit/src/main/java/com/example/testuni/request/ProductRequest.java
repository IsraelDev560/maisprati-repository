package com.example.testuni.request;

import jakarta.validation.constraints.NotBlank;
import lombok.Data;

@Data
public class ProductRequest {
    @NotBlank
    private String name;

    @NotBlank
    private String description;

    @NotBlank
    private int quantity;
}
