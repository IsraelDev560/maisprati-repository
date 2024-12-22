package com.example.many_to_many.service.students;

import com.example.many_to_many.mapper.StudentMapper;
import com.example.many_to_many.model.Student;
import com.example.many_to_many.repository.StudentRepository;
import com.example.many_to_many.request.StudentRequest;
import com.example.many_to_many.response.StudentResponse;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class StudentsService {
    @Autowired
    private StudentRepository studentRepository;

    @Transactional
    public StudentResponse add(StudentRequest request){
        Student student = StudentMapper.toEntity(request);
        studentRepository.save(student);

        return StudentMapper.toResponse(student);
    }
}
