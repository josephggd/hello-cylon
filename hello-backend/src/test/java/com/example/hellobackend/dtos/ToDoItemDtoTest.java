package com.example.hellobackend.dtos;

import com.example.hellobackend.entities.ToDoItem;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotEquals;

@DisplayName("ToDoItemDto tests:")
class ToDoItemDtoTest {

    @Test
    @DisplayName("Tests @Data annotation")
    void testTitle() {
        ToDoItemDto dto = new ToDoItemDto("title", "description");
        assertEquals("title", dto.getTitle());
        assertEquals("description", dto.getDescription());
        ToDoItemDto dto2 = new ToDoItemDto("title2", "description2");
        assertNotEquals(dto, dto2);
        // tests that toEntity() method works
        ToDoItem entity = dto.toEntity();
        assertEquals("title", entity.getTitle());
        assertEquals("description", entity.getDescription());
    }
}
