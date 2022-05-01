package com.example.hellobackend.entities;

import com.example.hellobackend.dtos.ToDoItemDto;
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
    @Test
    @DisplayName("required args constructor")
    void testRequiredArgsConstructor() {
        String testArg = "title";
        String testArg2 = "description";
        ToDoItem toDoItem = new ToDoItem(testArg, testArg2);
        assertEquals(toDoItem.getTitle(), testArg);
        assertEquals(toDoItem.getDescription(), testArg2);
    }
    @Test
    @DisplayName("test id getter & allargs constructor")
    void testId() {
        ToDoItem toDoItem = new ToDoItem(0L, "title", "description");
        assertEquals(toDoItem.getId(), 0);
    }
    @Test
    @DisplayName("tests toDto method")
    void testToDto() {
        ToDoItem toDoItem = new ToDoItem(0L, "title", "description");
        ToDoItemDto toDoItemDto = toDoItem.toDto();
        assertEquals(toDoItemDto.getTitle(), toDoItem.getTitle());
        assertEquals(toDoItemDto.getDescription(), toDoItem.getDescription());
    }
}
