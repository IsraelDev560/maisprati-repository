package com.swagger.swagger_example.repository;

import com.swagger.swagger_example.model.TodoItem;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TodoRepository extends JpaRepository<TodoItem, Long> {
}
