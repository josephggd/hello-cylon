package com.example.hellobackend.controllers;

import com.example.hellobackend.dtos.ToDoItemDto;
import com.example.hellobackend.dtos.ToDoListDto;
import com.example.hellobackend.entities.ToDoList;
//import com.example.hellobackend.services.ToDoItemService;
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
import org.springframework.test.context.TestPropertySource;
import org.springframework.test.web.servlet.MockMvc;

import java.util.List;

import static org.mockito.BDDMockito.given;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;



@DisplayName("DataController tests:")
// Annotations used to establish context; allows Spring to know what we are testing
@WebMvcTest(value = DataController.class)
@AutoConfigureMockMvc(addFilters = false)
@TestPropertySource(locations = "classpath:application.properties")
class DataControllerTest {

    private ObjectMapper objectMapper;
    private AutoCloseable autoCloseable;
    // MockBean is annotated to every service that is to be mocked
    @MockBean
    ToDoListService toDoListService;
//    @MockBean
//    ToDoItemService toDoItemService;
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
                .willReturn(List.of(new ToDoList("title", "description")));
        // when
        // then
        mockMvc.perform(get("/data/all"))
                .andExpect(status().isOk());
    }
    @Test
    @DisplayName("postNewToDoList should return response with status 200")
    void postNewToDoList_success() throws Exception {
        // given
        ToDoListDto toDoListDto = new ToDoListDto("title", "description", List.of());
        // when
        // then
        mockMvc.perform(post("/data/save/list")
                .contentType(MediaType.APPLICATION_JSON)
                .content(objectMapper.writeValueAsString(toDoListDto)))
                .andExpect(status().isOk());
    }
    @Test
    @DisplayName("postNewToDoItem should return response with status 200")
    void postNewToDoItem_success() throws Exception {
        // given
        ToDoItemDto toDoItemDto = new ToDoItemDto("title", "description");
        // when
        // then
        mockMvc.perform(post("/data/save/item")
                .contentType(MediaType.APPLICATION_JSON)
                .content(objectMapper.writeValueAsString(toDoItemDto)))
                .andExpect(status().isOk());
    }
    @Test
    @DisplayName("putUpdateToDoList should return response with status 200")
    void putUpdateToDoList_success() throws Exception {
        // given
        ToDoListDto toDoListDto = new ToDoListDto("title", "description", List.of());
        // when
        // then
        mockMvc.perform(put("/data/update/list")
                .contentType(MediaType.APPLICATION_JSON)
                .content(objectMapper.writeValueAsString(toDoListDto)))
                .andExpect(status().isOk());
    }
    @Test
    @DisplayName("putUpdateToDoItem should return response with status 200")
    void putUpdateToDoItem_success() throws Exception {
        // given
        ToDoItemDto toDoItemDto = new ToDoItemDto(1L, "title", "description");
        // when
        // then
        System.out.println(objectMapper.writeValueAsString(toDoItemDto));
        mockMvc.perform(put("/data/update/item")
                .contentType(MediaType.APPLICATION_JSON)
                .content(objectMapper.writeValueAsString(toDoItemDto)))
                .andExpect(status().isOk());
    }
    @Test
    @DisplayName("deleteToDoList should return response with status 200")
    void deleteToDoList_success() throws Exception {
        // given
        // when
        // then
        mockMvc.perform(delete("/data/delete/list/1"))
                .andExpect(status().isOk());
    }
    @Test
    @DisplayName("deleteToDoItem should return response with status 200")
    void deleteToDoItem_success() throws Exception {
        // given
        // when
        // then
        mockMvc.perform(delete("/data/delete/item/1"))
                .andExpect(status().isOk());
    }
}
