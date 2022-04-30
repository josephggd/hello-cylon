package com.example.hellobackend.dtos;

import com.example.hellobackend.entities.ToDoItem;
import lombok.Data;

@Data
public class ToDoItemDtoTest {
    private String title;
    private String description;
    public ToDoItem toEntity() {
        return new ToDoItem(this.title, this.description);
    }
    public ToDoItemDtoTest fromEntity(ToDoItem toDoItem) {
        this.title = toDoItem.getTitle();
        this.description = toDoItem.getDescription();
        return this;
    }
}
