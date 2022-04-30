package com.example.hellobackend.controllers;

import com.example.hellobackend.dtos.ToDoListDto;
import com.example.hellobackend.entities.ToDoList;
import com.example.hellobackend.services.ToDoListService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.logging.Logger;

@RestController
@RequestMapping("/data")
public class DataController {
    Logger logger = Logger.getLogger(DataController.class.getName());

    private final ToDoListService toDoListService;

    public DataController(ToDoListService toDoListService) {
        this.toDoListService = toDoListService;
    }

    // Full mapping to the endpoint: "localhost:9090/data/all"
    @GetMapping("/all")
    public ResponseEntity<List<ToDoListDto>> getAllToDoLists() {
        logger.info("getAllToDoLists() called");
        List<ToDoList> toDoLists = toDoListService.findAllToDoLists();
        // Streams are an extremely powerful way to iterate over a collection of objects.
        // Here we convert a list to a stream, which allows us to use the map() method.
        List<ToDoListDto> toDoListDtos = toDoLists
                .stream()
                // map() is a method that takes a function as an argument.
                // If the given functioin takes our stream's elements as arguments,
                // it returns a new stream containing the return of the function.
                .map(ToDoList::toDto)
                // Collect() converts the stream back to a collection like a list or set.
                .collect(java.util.stream.Collectors.toList());
        return ResponseEntity.ok(toDoListDtos);
    }

    @PostMapping("/add")
    // Full mapping to the endpoint: "localhost:9090/data/add"
    // Requires a ToDoList object in the request body: {"title": "title", "description": "description"}
    public ResponseEntity<String> postNewToDoList(
            @RequestBody ToDoListDto toDoListDto
    ) {
        logger.info("postNewToDoList() called");
        ToDoList toDoList = toDoListDto.toEntity();
        System.out.println("aaa:"+toDoList);
        toDoListService.saveNewToDoList(toDoList);
//        System.out.println("bnbb:"+savedToDoList);
//        ToDoListDto savedToDoListDto = savedToDoList.toDto();
//        System.out.println("ccccc:"+savedToDoListDto);
        return ResponseEntity.ok("ToDoList saved");
    }
}
