package com.example.hellobackend.dtos;

import com.example.hellobackend.entities.ToDoItem;
import com.example.hellobackend.entities.ToDoList;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.NonNull;
import lombok.RequiredArgsConstructor;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@Data
@NoArgsConstructor
@RequiredArgsConstructor
// Data Transfer Objects are typically used to abridge responses/requests & increase performance
public class ToDoListDto {
    private Long id;
    @NonNull
    private String title;
    @NonNull
    private String description;
    @NonNull
    private List<ToDoItemDto> items;

    // Returns an entity from a DTO
    public ToDoList toEntity() {
        ToDoList toDoList = new ToDoList();
        toDoList.setId(this.id);
        toDoList.setTitle(this.title);
        toDoList.setDescription(this.description);
        List<ToDoItem> items = new ArrayList<>();
        if (this.items != null) {
            items.addAll(this.items
                    .stream()
                    .map(ToDoItemDto::toEntity)
                    .collect(Collectors.toList()));
        }
        toDoList.setItems(items);
        return toDoList;
    }
}
