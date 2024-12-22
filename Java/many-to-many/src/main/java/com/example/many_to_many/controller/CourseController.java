package com.example.many_to_many.controller;

import com.example.many_to_many.request.CourseRequest;
import com.example.many_to_many.response.CourseResponse;
import com.example.many_to_many.service.course.AddCourseService;
import com.example.many_to_many.service.course.AddStudentToCourseService;
import com.example.many_to_many.service.course.RemoveStudentFromCourseService;
import com.example.many_to_many.service.students.GetCoursesByStudentsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/courses")
public class CourseController {
    @Autowired
    private AddCourseService courseService;

    @Autowired
    private AddStudentToCourseService addStudentToCourseService;

    @Autowired
    private RemoveStudentFromCourseService removeStudentFromCourseService;

    @Autowired
    private GetCoursesByStudentsService getCoursesService;

    @PostMapping
    public CourseResponse add(@RequestBody CourseRequest request){
        return courseService.add(request);
    }

    @PostMapping("/{courseId}/students/{id}")
    public CourseResponse add(@PathVariable Long courseId, @PathVariable Long id){
        return addStudentToCourseService.add(courseId, id);
    }

    @DeleteMapping("/{courseId}/students/{id}")
    public CourseResponse remove(@PathVariable Long courseId, @PathVariable Long id){
        return removeStudentFromCourseService.remove(courseId, id);
    }

    @GetMapping("/students/{id}")
    public Page<CourseResponse> list(@PathVariable Long id, Pageable pageable){
        return getCoursesService.list(id, pageable);
    }
}
