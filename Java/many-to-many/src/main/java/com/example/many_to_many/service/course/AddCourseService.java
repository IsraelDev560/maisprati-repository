package com.example.many_to_many.service.course;

import com.example.many_to_many.mapper.CourseMapper;
import com.example.many_to_many.model.Course;
import com.example.many_to_many.repository.CourseRepository;
import com.example.many_to_many.request.CourseRequest;
import com.example.many_to_many.response.CourseResponse;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AddCourseService {
    @Autowired
    private CourseRepository courseRepository;

    @Transactional
    public CourseResponse add(CourseRequest request) {
        Course course = CourseMapper.toEntity(request);
        courseRepository.save(course);

        return CourseMapper.toResponse(course);
    }
}
