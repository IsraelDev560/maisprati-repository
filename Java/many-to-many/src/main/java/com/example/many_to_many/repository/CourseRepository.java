package com.example.many_to_many.repository;

import com.example.many_to_many.model.Course;
import com.example.many_to_many.model.Student;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CourseRepository extends JpaRepository<Course, Long> {
    Page<Course> findByStudents(Student student, Pageable pageable);
}
