package com.example.hellobackend.entities;

import com.example.hellobackend.dtos.ToDoItemDto;
import lombok.*;

import javax.persistence.*;

@Entity
@Table(name = "to_do_item")
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
    public void setId(Long id) {
        if (this.id == null) {
            this.id = id;
        }
    }
    public ToDoItemDto toDto() {
        return new ToDoItemDto(this.getTitle(), this.getDescription());
    }
}
