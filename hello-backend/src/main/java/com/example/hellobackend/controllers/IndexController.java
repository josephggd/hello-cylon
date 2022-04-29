package com.example.hellobackend.controllers;

import org.springframework.web.bind.annotation.GetMapping;

public class IndexController {
    @GetMapping("/")
    public String index() {
        return "index";
    }
}