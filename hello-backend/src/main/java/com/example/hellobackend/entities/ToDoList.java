package com.example.hellobackend.entities;

import lombok.*;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;

@Entity
// Lombok annotation to generate a constructor WITHOUT arguments.
@NoArgsConstructor
// Lombok annotation to generate a constructor with ALL arguments
@AllArgsConstructor
// Lombok annotation to generate a constructor with REQUIRED arguments.
@RequiredArgsConstructor
// @Data can be used to generate getters/setters, but we want to avoid using @Data on entities.
public class ToDoList {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Getter
    // No getter; ID is generated automatically by JPA.
    private Long id;

    // Getters/setters for each field to eliminate boilerplate code.
    @Getter
    @Setter
    // Nonnull stipulates that this is a required field.
    @NonNull
    private String title;

    @Getter
    @Setter
    @NonNull
    private String description;

    @Getter
    @Setter
    // Establishes A One-To-Many relationship between ToDoList and ToDoItem.
    // Fetch type is EAGER to ensure that the ToDoItem is loaded immediately.
    // Otherwise a fetch type of LAZY would prevent immediate loading/fetching.
    @OneToMany(fetch = FetchType.EAGER)
    // Connects to the migration 'Create_to_do_items' and references the table.
    @JoinTable(name = "todo_list_items",
            // Name of the ONE side's column.
            joinColumns = @JoinColumn(name = "list_id"),
            // Name of the MANY side's column.
            inverseJoinColumns = @JoinColumn(name = "item_id"))
    private Set<ToDoItem> items = new HashSet<>();
}
