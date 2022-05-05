package com.example.hellobackend.dtos;

import com.example.hellobackend.entities.ToDoItem;
import lombok.*;


@Data
@NoArgsConstructor
@AllArgsConstructor
// Covers all arguments not marked as NonNull (i.e. the ID, which is not included in the first POST)
@RequiredArgsConstructor
public class ToDoItemDto {
    private Long id;
    @NonNull // AKA required
    private String title;
    @NonNull // AKA required
    private String description;
    public ToDoItem toEntity() {
        ToDoItem toDoItem = new ToDoItem();
        toDoItem.setId(id);
        toDoItem.setTitle(this.title);
        toDoItem.setDescription(this.description);
        return toDoItem;
    }
}
