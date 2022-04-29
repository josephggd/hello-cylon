package com.example.hellobackend;

import com.example.hellobackend.entities.ToDoItem;
import com.example.hellobackend.entities.ToDoList;
import com.example.hellobackend.repositories.ToDoItemRepository;
import com.example.hellobackend.repositories.ToDoListRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;

// This file is used to auto-populate the database with test data.
// It can be ignored for the purposes of this exercise.
@org.springframework.context.annotation.Configuration
public class Configuration {

    @Bean
    CommandLineRunner scheduleExamsCreateExaminees(
            ToDoListRepository toDoListRepository,
            ToDoItemRepository toDoItemRepository
    ) {
        return args -> {
            ToDoList toDoList = new ToDoList("Schedule Exams","Schedule exams");
            ToDoItem toDoItem = new ToDoItem("Schedule Math", "Schedule math exam for the upcoming semester");
            toDoListRepository.save(toDoList);
            toDoItemRepository.save(toDoItem);
        };
    }
}
