package com.example.hellobackend.services;

import com.example.hellobackend.dtos.ToDoListDto;
import com.example.hellobackend.entities.ToDoList;
import com.example.hellobackend.repositories.ToDoListRepository;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;

import java.util.List;

import static org.mockito.BDDMockito.given;
import static org.mockito.Mockito.verify;

@DisplayName("ToDoListService tests:")
class ToDoListServiceTest {
    private AutoCloseable autoCloseable;
    @Mock
    private ToDoListRepository toDoListRepository;
    @InjectMocks
    ToDoListService toDoListService;

    @BeforeEach
    void setUp() {
        autoCloseable = MockitoAnnotations.openMocks(this);
        toDoListService = new ToDoListService(toDoListRepository);
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
    @DisplayName("saveNewToDoList() should save a new ToDoList")
    void saveNewToDoList_success() {
        // given
        ToDoList toDoList = new ToDoList("title", "description");
        // when
        toDoListService.saveNewToDoList(toDoList);
        // then
        verify(toDoListRepository).save(toDoList);
    }
}
