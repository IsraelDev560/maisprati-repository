package com.example.many_to_many.service.course;

import com.example.many_to_many.mapper.CourseMapper;
import com.example.many_to_many.mapper.StudentMapper;
import com.example.many_to_many.model.Course;
import com.example.many_to_many.model.Student;
import com.example.many_to_many.repository.CourseRepository;
import com.example.many_to_many.repository.StudentRepository;
import com.example.many_to_many.response.CourseResponse;
import com.example.many_to_many.service.utils.GetCourseByIdService;
import com.example.many_to_many.service.utils.GetStudentByIdService;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AddStudentToCourseService {

    @Autowired
    private StudentRepository studentRepository;

    @Autowired
    private CourseRepository courseRepository;

    @Autowired
    private GetCourseByIdService getCourseByIdService;

    @Autowired
    private GetStudentByIdService getStudentByIdService;

    @Transactional
    public CourseResponse add(Long courseId, Long id) {
        Student student = getStudentByIdService.byId(id);
        Course course = getCourseByIdService.byId(courseId);

        student.addCourse(course);
        studentRepository.save(student);
        courseRepository.save(course);
        return CourseMapper.toResponse(course);
    }
}
