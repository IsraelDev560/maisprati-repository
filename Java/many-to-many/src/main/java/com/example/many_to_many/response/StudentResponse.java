package com.example.many_to_many.response;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
@Builder
@Data
public class StudentResponse {
    private Long id;
    private String name;
    private String email;
}
