package com.example.hellobackend.services;

import com.example.hellobackend.entities.ToDoList;
import com.example.hellobackend.repositories.ToDoItemRepository;
import com.example.hellobackend.repositories.ToDoListRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.logging.Logger;

// The Service annotation, similar to the @Repository annotation, is used to mark a class as a service.
@Service
public class ToDoListService {
    // Logger instantiated for the class to use
    Logger logger = Logger.getLogger(ToDoListService.class.getName());

    // Dictate dependency fields for TodoListService
    private final ToDoListRepository toDoListRepository;
    private final ToDoItemRepository toDoItemRepository;

    // Constructor calls on autowired fields
    public ToDoListService(
            ToDoListRepository toDoListRepository,
            ToDoItemRepository toDoItemRepository
    ) {
        this.toDoListRepository = toDoListRepository;
        this.toDoItemRepository = toDoItemRepository;
    }

    // Get all to do lists
    public List<ToDoList> findAllToDoLists() {
        logger.info("Getting all to do lists");
        // .findall() returns an iterable of ALL to do lists in the table
        return toDoListRepository.findAll();
    }

    // Get to do list by id
    public ToDoList findToDoListById(Long id) {
        logger.info("Getting to do list: " + id);
        // or Else throw prevents us from returning Optional.empty()
        return toDoListRepository.findById(id).orElseThrow(
                ()-> new IllegalArgumentException("No to do list found with id: " + id)
        );
    }

    // Save a to do list
    public void saveOrUpdateToDoList(ToDoList toDoList) {
        logger.info("Saving/updating to do list");
        // .save() returns the saved to do list
        if (toDoList.getId() != null) {
            ToDoList oldToDoList = this.findToDoListById(toDoList.getId());
            toDoItemRepository.deleteAll(oldToDoList.getItems());
        }
        toDoItemRepository.saveAll(toDoList.getItems());
        toDoListRepository.save(toDoList);
    }

    public void deleteToDoList(ToDoList toDoList) {
        logger.info("Deleting to do list: " + toDoList.getTitle());
        // .delete() returns the deleted to do list
        toDoListRepository.delete(toDoList);
    }
}
