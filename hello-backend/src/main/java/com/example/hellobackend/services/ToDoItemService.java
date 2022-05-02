package com.example.hellobackend.services;

import com.example.hellobackend.entities.ToDoItem;
import com.example.hellobackend.repositories.ToDoItemRepository;
import org.springframework.stereotype.Service;

import java.util.logging.Logger;

// To keep our code clean, we write multiple services (one for each entity).
@Service
public class ToDoItemService {
    Logger logger = Logger.getLogger(ToDoItemService.class.getName());

    private final ToDoItemRepository toDoItemRepository;

    public ToDoItemService(ToDoItemRepository toDoItemRepository) {
        this.toDoItemRepository = toDoItemRepository;
    }
    public void saveOrUpdateToDoItem(ToDoItem toDoItem) {
        logger.info("Saving/updating to do item");
        toDoItemRepository.save(toDoItem);
    }

    public ToDoItem findToDoItemById(Long id) {
        logger.info("Getting to do item: " + id);
        return toDoItemRepository.findById(id).orElseThrow(
                () -> new IllegalArgumentException("ToDoItem not found")
        );
    }

    public void deleteToDoItem(ToDoItem toDoItem) {
        logger.info("Deleting to do item: " + toDoItem.getTitle());
        toDoItemRepository.delete(toDoItem);
    }
}
