package com.example.hellobackend.dtos;

import com.example.hellobackend.entities.ToDoList;
import lombok.Data;

@Data
// DTOs are typically used to abridge responses/requests & increase performance
public class ToDoListDtoTest {
    private String title;
    private String description;
    // Returns an entity from a DTO
    public ToDoList toEntity() {
        return new ToDoList(this.title, this.description);
    }
    // Returns a DTO from an entity
    public ToDoListDtoTest fromEntity(ToDoList toDoList) {
        this.title = toDoList.getTitle();
        this.description = toDoList.getDescription();
        return this;
    }
}
