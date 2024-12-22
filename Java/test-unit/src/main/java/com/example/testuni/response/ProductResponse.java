package com.example.testuni.response;

import lombok.*;

@NoArgsConstructor
@AllArgsConstructor
@Builder
@Data
public class ProductResponse {
    private Long id;

    private String name;

    private String description;

    private int quantity;
}
