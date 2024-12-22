package com.swagger.swagger_example.controller;

import com.swagger.swagger_example.model.TodoItem;
import com.swagger.swagger_example.service.TodoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/todos")
public class TodoController {
    @Autowired
    private TodoService todoService;

    @GetMapping
    public List<TodoItem> getAllTodos(){
        return todoService.getAllTodos();
    }

    @PostMapping
    public TodoItem createTodoItem(@RequestBody TodoItem todoItem){
        return todoService.saveTodoItem(todoItem);
    }

    @PutMapping("/{id}")
    public ResponseEntity<TodoItem> updateTodoItem(@PathVariable Long id, @RequestBody TodoItem todoItem){
        return todoService.getTodoById(id).map(existingTodo -> {
            existingTodo.setTitle(todoItem.getTitle());
            existingTodo.setDescription(todoItem.getDescription());
            existingTodo.setCompleted(todoItem.isCompleted());
            return ResponseEntity.ok(todoService.saveTodoItem(existingTodo));
        }).orElse(ResponseEntity.notFound().build());
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteTodoItem(@PathVariable Long id){
        if (todoService.getTodoById(id).isPresent()){
            todoService.deleteTodoItem(id);
            return ResponseEntity.noContent().build();
        }
        return ResponseEntity.notFound().build();
    }
}
