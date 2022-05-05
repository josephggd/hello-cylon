package com.example.hellobackend.services;

import com.example.hellobackend.entities.ToDoList;
import com.example.hellobackend.repositories.ToDoItemRepository;
import com.example.hellobackend.repositories.ToDoListRepository;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;

import java.util.List;

import static org.junit.jupiter.api.Assertions.assertThrows;
import static org.mockito.BDDMockito.given;
import static org.mockito.Mockito.verify;

@DisplayName("ToDoListService tests:")
class ToDoListServiceTest {
    private AutoCloseable autoCloseable;
    // Mock is used to simulate the behavior of the repository
    @Mock
    private ToDoListRepository toDoListRepository;
    @Mock
    private ToDoItemRepository toDoItemRepository;
    // InjectMocks is used to inject the mock into the service
    @InjectMocks
    ToDoListService toDoListService;

    @BeforeEach
    void setUp() {
        autoCloseable = MockitoAnnotations.openMocks(this);
        toDoListService = new ToDoListService(toDoListRepository, toDoItemRepository);
    }

    @AfterEach
    void tearDown() throws Exception {
        autoCloseable.close();
    }

    @Test
    @DisplayName("findAlLToDoLists() should return a list of ToDoLists")
    void findAllToDoLists_success() {
        // given
        given(toDoListRepository.findAll()).willReturn(List.of(new ToDoList()));
        // when
        toDoListService.findAllToDoLists();
        // then
        verify(toDoListRepository).findAll();
    }
    @Test
    @DisplayName("findToDoListById() should return a ToDoList")
    void findToDoListById_success() {
        // given
        Long id = 1L;
        given(toDoListRepository.findById(id)).willReturn(java.util.Optional.of(new ToDoList()));
        // when
        toDoListService.findToDoListById(id);
        // then
        verify(toDoListRepository).findById(id);
    }
    @Test
    @DisplayName("findToDoListById() should throw an exception if ToDoList is not found")
    void findToDoListById_failure() {
        // given
        Long id = 1L;
        given(toDoListRepository.findById(id)).willReturn(java.util.Optional.empty());
        // when
        assertThrows(IllegalArgumentException.class,
                () -> toDoListService.findToDoListById(id));
        // then
    }

    @Test
    @DisplayName("saveNewToDoList() should save a new ToDoList")
    void saveNewToDoList_success() {
        // given
        ToDoList toDoList = new ToDoList("title", "description");
        // when
        toDoListService.saveOrUpdateToDoList(toDoList);
        // then
        verify(toDoListRepository).save(toDoList);
    }

    @Test
    @DisplayName("deleteToDoList() should delete a ToDoList")
    void deleteToDoList_success() {
        // given
        ToDoList toDoList = new ToDoList("title", "description");
        // when
        toDoListService.deleteToDoList(toDoList);
        // then
        verify(toDoListRepository).delete(toDoList);
    }
}
