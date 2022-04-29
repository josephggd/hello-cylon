package com.example.hellobackend.entities;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

// A JPA entity creates an Object Relational Mapping (ORM) for the entity.
// This means that we can think of each entity object/class instance as a row in a database table.
@Entity
public class ToDoList {
    // Primary key is an auto-incrementing integer (required by JPA)
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String title;
    private String description;

    // Default constructor (required by JPA)
    public ToDoList() {
    }

    // Constructor with title and description
    public ToDoList(String title, String description) {
        this.title = title;
        this.description = description;
    }

    // Manual getter and setter methods
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }
}
