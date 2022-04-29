package com.example.hellobackend.entities;

import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;

@DisplayName("ToDoItem tests:")
class ToDoItemTest {

    @Test
    @DisplayName("test title getter and setter")
    void testTitle() {
        String testArg = "title";
        ToDoItem toDoItem = new ToDoItem();
        toDoItem.setTitle(testArg);
        assertEquals(toDoItem.getTitle(), testArg);
    }
    @Test
    @DisplayName("test description getter and setter")
    void testDescription() {
        String testArg = "description";
        ToDoItem toDoItem = new ToDoItem();
        toDoItem.setDescription(testArg);
        assertEquals(toDoItem.getDescription(), testArg);
    }
}
