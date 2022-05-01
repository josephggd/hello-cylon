package com.example.hellobackend.dtos;

import com.example.hellobackend.entities.ToDoItem;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NonNull;

@Data
@AllArgsConstructor
public class ToDoItemDto {
    @NonNull
    private String title;
    @NonNull
    private String description;
    // Returns an entity from a DTO
    public ToDoItem toEntity() {
        ToDoItem toDoItem = new ToDoItem();
        toDoItem.setTitle(this.title);
        toDoItem.setDescription(this.description);
        return toDoItem;
    }
}
