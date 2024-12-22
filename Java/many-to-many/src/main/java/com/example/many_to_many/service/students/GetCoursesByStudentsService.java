package com.example.many_to_many.service.students;

import com.example.many_to_many.mapper.CourseMapper;
import com.example.many_to_many.model.Student;
import com.example.many_to_many.repository.CourseRepository;
import com.example.many_to_many.response.CourseResponse;
import com.example.many_to_many.service.utils.GetStudentByIdService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

@Service
public class GetCoursesByStudentsService {
    @Autowired
    CourseRepository courseRepository;

    @Autowired
    GetStudentByIdService getStudentByIdService;

    public Page<CourseResponse> list(Long id, Pageable pageable){
        Student student = getStudentByIdService.byId(id);

        return courseRepository.findByStudents(student, pageable)
                .map(CourseMapper::toResponse);
    }
}
