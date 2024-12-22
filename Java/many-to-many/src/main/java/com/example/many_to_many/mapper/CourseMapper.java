package com.example.many_to_many.mapper;

import com.example.many_to_many.model.Course;
import com.example.many_to_many.request.CourseRequest;
import com.example.many_to_many.response.CourseResponse;

public class CourseMapper {

    public static Course toEntity(CourseRequest request){
        return Course.builder()
                .name(request.getName())
                .description(request.getDescription())
                .build();
    }

    public static CourseResponse toResponse(Course course){
        return CourseResponse.builder()
                .id(course.getId())
                .name(course.getName())
                .description(course.getDescription())
                .build();
    }
}
