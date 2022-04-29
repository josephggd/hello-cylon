package com.example.hellobackend.controllers;

import com.example.hellobackend.entities.ToDoList;
import com.example.hellobackend.services.ToDoListService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.logging.Logger;

// The RestController/Controller annotations are used to mark a class as a controller.
@RestController
// Prefix for all the endpoints on this controller.
@RequestMapping("/data")
// Controller functions should return a ResponseEntity containing the response body.
public class DataController {
    // Logger instantiated for the class.
    Logger logger = Logger.getLogger(DataController.class.getName());

    // Declare ToDoListService as a field/dependency.
    private final ToDoListService toDoListService;

    // Constructor injects Service.
    public DataController(ToDoListService toDoListService) {
        this.toDoListService = toDoListService;
    }

    // GET request to find all ToDoLists.
    // Full mapping to the endpoint: "localhost:9090/data/all"
    @GetMapping("/all")
    public ResponseEntity<List<ToDoList>> getAllToDoLists() {
        // logger shows data in the terminal.
        logger.info("getAllToDoLists() called");
        return ResponseEntity.ok(toDoListService.findAllToDoLists());
    }

    // POST request to create a new ToDoList.
    @PostMapping("/add")
    // Full mapping to the endpoint: "localhost:9090/data/add"
    // Requires a ToDoList object in the request body: {"title": "title", "description": "description"}
    public ResponseEntity<ToDoList> postNewToDoList(ToDoList toDoList) {
        logger.info("postNewToDoList() called");
        return ResponseEntity.ok(toDoListService.saveNewToDoList(toDoList));
    }
}
