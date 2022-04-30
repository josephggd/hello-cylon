package com.example.hellobackend.entities;

import com.example.hellobackend.dtos.ToDoItemDto;
import com.example.hellobackend.dtos.ToDoListDto;
import lombok.*;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
@NoArgsConstructor
@AllArgsConstructor
@RequiredArgsConstructor
public class ToDoItem {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Getter
    private Long id;
    @NonNull
    @Getter
    @Setter
    private String title;
    @NonNull
    @Getter
    @Setter
    private String description;
    public ToDoItemDto toDto() {
        return new ToDoItemDto(this.getTitle(), this.getDescription());
    }
}
