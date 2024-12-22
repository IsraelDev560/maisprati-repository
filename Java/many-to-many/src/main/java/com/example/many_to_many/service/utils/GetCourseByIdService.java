package com.example.many_to_many.service.utils;

import com.example.many_to_many.model.Course;
import com.example.many_to_many.repository.CourseRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.client.HttpClientErrorException;
import org.springframework.web.server.ResponseStatusException;

@Service
public class GetCourseByIdService {
    @Autowired
    CourseRepository courseRepository;

    public Course byId(Long id){
        return courseRepository.findById(id)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.BAD_REQUEST, "Course Not Found"));
    }
}
