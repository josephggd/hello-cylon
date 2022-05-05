package com.example.hellobackend.controllers;

import com.example.hellobackend.dtos.ToDoItemDto;
import com.example.hellobackend.dtos.ToDoListDto;
import com.example.hellobackend.entities.ToDoItem;
import com.example.hellobackend.entities.ToDoList;
import com.example.hellobackend.services.ToDoListService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.logging.Logger;

@RestController
@RequestMapping("/data")
public class DataController {
    Logger logger = Logger.getLogger(DataController.class.getName());

    private final ToDoListService toDoListService;

    public DataController(
            ToDoListService toDoListService
    ) {
        this.toDoListService = toDoListService;
    }

    // Full mapping to the endpoint: "localhost:9090/data/all"
    @GetMapping("/all")
    public ResponseEntity<Map<String, List<ToDoListDto>>> getAllToDoLists() {
        logger.info("getAllToDoLists() called");
        List<ToDoList> toDoLists = toDoListService.findAllToDoLists();
        // Streams are an extremely powerful way to iterate over a collection of objects.
        // Here we convert a list to a stream, which allows us to use the map() method.
        List<ToDoListDto> toDoListDtos = toDoLists
                .stream()
                // map() is a method that takes a function as an argument.
                // If the given function takes our stream's elements as arguments,
                // it returns a new stream containing the return of the function.
                .map(ToDoList::toDto)
                // Collect() converts the stream back to a collection like a list or set.
                .collect(java.util.stream.Collectors.toList());
        // Finally we create a map to return an organized JSON (vs a list of JSONs).
        Map<String, List<ToDoListDto>> responseJson = new HashMap<>();
        responseJson.put("toDoLists", toDoListDtos);
        return ResponseEntity.ok(responseJson);
    }

    @PostMapping("/save/list")
    // Full mapping to the endpoint: "localhost:9090/data/save"
    // Requires a ToDoList object in the request body: {"title": "title", "description": "description"}
    public ResponseEntity<String> postNewToDoList(
            @RequestBody ToDoListDto toDoListDto
    ) {
        logger.info("postNewToDoList() called");
        ToDoList toDoList = toDoListDto.toEntity();
        toDoListService.saveOrUpdateToDoList(toDoList);
        return ResponseEntity.ok("SAVED");
    }

//    @PostMapping("/save/item")
//    // Full mapping to the endpoint: "localhost:9090/data/save"
//    // Requires a ToDoList object in the request body: {"title": "title", "description": "description"}
//    public ResponseEntity<String> postNewToDoItem(
//            @RequestBody ToDoItemDto toDoItemDto
//    ) {
//        logger.info("postNewToDoItem() called");
//        ToDoItem toDoItem = toDoItemDto.toEntity();
//        toDoItemService.saveOrUpdateToDoItem(toDoItem);
//        return ResponseEntity.ok("SAVED");
//    }

    @PutMapping("/update/list")
    // Full mapping to the endpoint: "localhost:9090/data/update/list"
    // Requires a ToDoList object in the request body: {id:1, "title": "title", "description": "description"}
    public ResponseEntity<String> putUpdateToDoList(
            @RequestBody ToDoListDto toDoListDto
    ) {
        logger.info("putUpdateToDoList() called");
        ToDoList toDoList = toDoListDto.toEntity();
        toDoListService.saveOrUpdateToDoList(toDoList);
        return ResponseEntity.ok("UPDATED");
    }

//    @PutMapping("/update/item")
//    // Full mapping to the endpoint: "localhost:9090/data/update/item"
//    // Requires a ToDoList object in the request body: {id:1, "title": "title", "description": "description"}
//    public ResponseEntity<String> putUpdateToDoItem(
//            @RequestBody ToDoItemDto toDoItemDto
//    ) {
//        logger.info("putUpdateToDoItem() called");
//        ToDoItem toDoItem = toDoItemDto.toEntity();
//        toDoItemService.saveOrUpdateToDoItem(toDoItem);
//        return ResponseEntity.ok("UPDATED");
//    }

    @DeleteMapping("/remove/list/{id}")
    // Full mapping to the endpoint: "localhost:9090/data/delete/list/1"
    public ResponseEntity<String> deleteToDoList(
            @PathVariable("id") Long id
    ) {
        logger.info("deleteToDoList() called");
        // Find the entity to make sure it exists
        ToDoList toDoList = toDoListService.findToDoListById(id);
        // Delete the entity
        toDoListService.deleteToDoList(toDoList);
        return ResponseEntity.ok("DELETED");
    }

//    @DeleteMapping("/remove/item/{id}")
//    // Full mapping to the endpoint: "localhost:9090/data/delete/item/1"
//    public ResponseEntity<String> deleteToDoItem(
//            @PathVariable("id") Long id
//    ) {
//        logger.info("deleteToDoItem() called");
//        ToDoItem toDoItem = toDoItemService.findToDoItemById(id);
//        toDoItemService.deleteToDoItem(toDoItem);
//        return ResponseEntity.ok("DELETED");
//    }
}
