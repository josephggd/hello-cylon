package com.example.hellobackend.services;

import com.example.hellobackend.entities.ToDoList;
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

    // Constructor calls on autowired fields
    public ToDoListService(
            ToDoListRepository toDoListRepository
    ) {
        this.toDoListRepository = toDoListRepository;
    }

    // Get all to do lists
    public List<ToDoList> findAllToDoLists() {
        logger.info("Getting all to do lists");
        // .findall() returns an iterable of ALL to do lists in the table
        return toDoListRepository.findAll();
    }

    // Save a to do list
    public void saveNewToDoList(ToDoList toDoList) {
        logger.info("Saving new to do list");
        // .save() returns the saved to do list
        toDoListRepository.save(toDoList);
    }


}
