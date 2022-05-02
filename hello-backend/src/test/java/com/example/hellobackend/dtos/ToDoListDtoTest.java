package com.example.hellobackend.dtos;

import com.example.hellobackend.entities.ToDoList;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotEquals;

@DisplayName("ToDoListDto tests:")
class ToDoListDtoTest {

    @Test
    @DisplayName("Tests @Data annotation")
    void testTitle() {
        ToDoListDto dto = new ToDoListDto("title", "description", List.of());
        assertEquals("title", dto.getTitle());
        assertEquals("description", dto.getDescription());
        ToDoListDto dto2 = new ToDoListDto("title2", "description2", List.of());
        assertNotEquals(dto, dto2);
        // tests that toEntity() method works
        ToDoList entity = dto.toEntity();
        assertEquals("title", entity.getTitle());
        assertEquals("description", entity.getDescription());
    }
}
