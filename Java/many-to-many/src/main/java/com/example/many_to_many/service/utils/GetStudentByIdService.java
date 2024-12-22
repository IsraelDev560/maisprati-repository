package com.example.many_to_many.service.utils;

import com.example.many_to_many.model.Course;
import com.example.many_to_many.model.Student;
import com.example.many_to_many.repository.StudentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

@Service
public class GetStudentByIdService {
    @Autowired
    StudentRepository studentRepository;

    public Student byId(Long id){
        return studentRepository.findById(id)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.BAD_REQUEST, "Student Not Found"));
    }
}
