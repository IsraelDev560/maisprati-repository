package com.example.many_to_many.request;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
public class CourseRequest {
    private String name;
    private String description;
}
