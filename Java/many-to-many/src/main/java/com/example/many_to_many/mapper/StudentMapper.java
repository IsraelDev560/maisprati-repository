package com.example.many_to_many.mapper;

import com.example.many_to_many.model.Student;
import com.example.many_to_many.request.StudentRequest;
import com.example.many_to_many.response.StudentResponse;

public class StudentMapper {

    public static Student toEntity(StudentRequest request){
        return Student.builder()
                .name(request.getName())
                .email(request.getEmail())
                .build();
    }

    public static StudentResponse toResponse(Student student){
        return StudentResponse.builder()
                .id(student.getId())
                .name(student.getName())
                .email(student.getEmail())
                .build();


    }
}
