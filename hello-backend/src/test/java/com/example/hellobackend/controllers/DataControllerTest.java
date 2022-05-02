package com.example.hellobackend.controllers;

import com.example.hellobackend.entities.ToDoList;
import com.example.hellobackend.services.ToDoListService;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.mockito.MockitoAnnotations;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;

import java.util.List;

import static org.mockito.BDDMockito.given;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@DisplayName("DataController tests:")
// Annotations used to establish context; allows Spring to know what we are testing
@WebMvcTest(DataController.class)
@AutoConfigureMockMvc(addFilters = false)
class DataControllerTest {

    private ObjectMapper objectMapper;
    private AutoCloseable autoCloseable;
    // MockBean is annotated to every service that is to be mocked
    @MockBean
    ToDoListService toDoListService;
    // MockMvc is used to perform requests against the application
    @Autowired
    private MockMvc mockMvc;

    @BeforeEach
    void setUp() {
        objectMapper = new ObjectMapper();
        autoCloseable = MockitoAnnotations.openMocks(this);
    }

    @AfterEach
    void tearDown() throws Exception {
        autoCloseable.close();
    }

    @Test
    @DisplayName("getAllData should return response with status 200")
    void getAllToDoLists_success() throws Exception {
        // given
        given(toDoListService.findAllToDoLists())
                .willReturn(List.of(new ToDoList()));
        // when
        // then
        mockMvc.perform(get("/data/all"))
                .andExpect(status().isOk());
    }

    @Test
    @DisplayName("postNewToDoList should return response with status 200")
    void  postNewToDoList_success() throws Exception {
        // given
        ToDoList toDoList = new ToDoList(
                "name",
                "description");
        given(toDoListService.saveNewToDoList(toDoList))
                .willReturn(toDoList);
        // when
        // then
        mockMvc.perform(post("/data/add")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(objectMapper.writeValueAsString(toDoList)))
                .andExpect(status().isOk());
    }
}
