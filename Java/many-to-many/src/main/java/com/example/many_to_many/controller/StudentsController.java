package com.example.many_to_many.controller;

import com.example.many_to_many.model.Student;
import com.example.many_to_many.repository.StudentRepository;
import com.example.many_to_many.request.StudentRequest;
import com.example.many_to_many.response.StudentResponse;
import com.example.many_to_many.service.students.GetStudentsByCourseService;
import com.example.many_to_many.service.students.StudentsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/students")
public class StudentsController {

    @Autowired
    private StudentsService studentsService;

    @Autowired
    private StudentRepository repository;

    @Autowired
    private GetStudentsByCourseService getStudentsByCourseService;

    @PostMapping
    public StudentResponse add(@RequestBody StudentRequest request){
        return studentsService.add(request);
    }

    @GetMapping
    public List<Student> getAll(){
        return ResponseEntity.ok(repository.findAll()).getBody();
    }

    @GetMapping("/courses/{id}")
    public Page<StudentResponse> list(@PathVariable Long id, Pageable pageable){
        return getStudentsByCourseService.list(id, pageable);
    }
}
