package com.example.many_to_many.service.students;

import com.example.many_to_many.mapper.StudentMapper;
import com.example.many_to_many.model.Course;
import com.example.many_to_many.repository.StudentRepository;
import com.example.many_to_many.response.StudentResponse;
import com.example.many_to_many.service.utils.GetCourseByIdService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

@Service
public class GetStudentsByCourseService {
    @Autowired
    StudentRepository studentRepository;

    @Autowired
    GetCourseByIdService getCourseByIdService;

    public Page<StudentResponse> list(Long id, Pageable pageable){
        Course course = getCourseByIdService.byId(id);

        return studentRepository.findByCourses(course, pageable)
                .map(StudentMapper::toResponse);
    }
}
