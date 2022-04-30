package com.example.hellobackend.entities;

import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;

// DisplayName appears in test report
@DisplayName("ToDoList tests:")
// class named after test subject
class ToDoListTest {

    // Test annotation lets Springboot know this is a test method
    @Test
    @DisplayName("test title getter and setter")
    void testTitle() {
        // Define once, use everwhere within this test
        String testArg = "title";
        // Since we are testing setter, all we need is a zero argument constructor
        ToDoList toDoList = new ToDoList();
        toDoList.setTitle(testArg);
        // Last step: assertEquals is a JUnit assertion used to compare two values
        // At least one assertion is required for a test to pass
        assertEquals(toDoList.getTitle(), testArg);
    }
    @Test
    @DisplayName("test description getter and setter")
    void testDescription() {
        String testArg = "description";
        ToDoList toDoList = new ToDoList();
        toDoList.setDescription(testArg);
        assertEquals(toDoList.getDescription(), testArg);
        List<ToDoItem> items = List.of();
        toDoList.setItems(items);
        assertEquals(toDoList.getItems(), items);
    }
    @Test
    @DisplayName("required args constructor")
    void testRequiredArgsConstructor() {
        String testArg = "title";
        String testArg2 = "description";
        ToDoList toDoList = new ToDoList(testArg, testArg2);
        assertEquals(toDoList.getTitle(), testArg);
        assertEquals(toDoList.getDescription(), testArg2);
    }
    @Test
    @DisplayName("test id getter & allargs constructor")
    void testId() {
        ToDoList toDoList = new ToDoList(0L, "title", "description", List.of());
        assertEquals(toDoList.getId(), 0);
    }
}
