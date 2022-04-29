package com.example.hellobackend.repositories;

import com.example.hellobackend.entities.ToDoList;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

// The Repository annotation auto-generates the methods needed to interact with the database
// extends JpaRepository: provides the basic CRUD operations
// ToDoList is the class that is stored in the database
// Long is the type of the primary key
@Repository
public interface ToDoListRepository extends JpaRepository<ToDoList, Long> {
}
