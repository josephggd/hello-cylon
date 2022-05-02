package com.example.hellobackend.services;

import com.example.hellobackend.entities.ToDoItem;
import com.example.hellobackend.repositories.ToDoItemRepository;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;

import static org.junit.jupiter.api.Assertions.assertThrows;
import static org.mockito.BDDMockito.given;
import static org.mockito.Mockito.verify;

class ToDoItemServiceTest {
    private AutoCloseable autoCloseable;

    @Mock
    private ToDoItemRepository toDoItemRepository;
    @InjectMocks
    ToDoItemService toDoItemService;

    @BeforeEach
    void setUp() {
        autoCloseable = MockitoAnnotations.openMocks(this);
        toDoItemService = new ToDoItemService(toDoItemRepository);
    }

    @AfterEach
    void tearDown() throws Exception {
        autoCloseable.close();
    }
    @Test
    @DisplayName("findToDoItemById() should return a ToDoItem")
    void findToDoItemById_success() {
        // given
        Long id = 1L;
        given(toDoItemRepository.findById(id)).willReturn(java.util.Optional.of(new ToDoItem()));
        // when
        toDoItemService.findToDoItemById(id);
        // then
        verify(toDoItemRepository).findById(id);
    }
    @Test
    @DisplayName("findToDoItemById() should throw an exception if ToDoItem is not found")
    void findToDoItemById_failure() {
        // given
        Long id = 1L;
        given(toDoItemRepository.findById(id)).willReturn(java.util.Optional.empty());
        // when
        assertThrows(IllegalArgumentException.class,
                () -> toDoItemService.findToDoItemById(id));
        // then
    }

    @Test
    @DisplayName("saveNewToDoItem() should save a new ToDoItem")
    void saveNewToDoItem_success() {
        // given
        ToDoItem toDoItem = new ToDoItem("title", "description");
        // when
        toDoItemService.saveOrUpdateToDoItem(toDoItem);
        // then
        verify(toDoItemRepository).save(toDoItem);
    }

    @Test
    @DisplayName("deleteToDoItem() should delete a ToDoItem")
    void deleteToDoItem_success() {
        // given
        ToDoItem toDoItem = new ToDoItem("title", "description");
        // when
        toDoItemService.deleteToDoItem(toDoItem);
        // then
        verify(toDoItemRepository).delete(toDoItem);
    }
}