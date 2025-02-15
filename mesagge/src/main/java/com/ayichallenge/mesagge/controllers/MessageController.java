package com.ayichallenge.mesagge.controllers;

import org.springframework.http.ResponseEntity;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;

import org.springframework.beans.factory.annotation.Autowired;

import com.ayichallenge.mesagge.services.MessageService;

@RestController
@RequestMapping("/api/messages")
public class MessageController {
    
    @Autowired
    private MessageService service;

    @GetMapping()
    public ResponseEntity<String> getMessage(){
        return service.getRandomMessage()
            .map(ResponseEntity::ok)
            .orElse(ResponseEntity.status(HttpStatus.NOT_FOUND)
            .body("No hay mensajes disponibles")) ;
    }

    @PostMapping()
    public ResponseEntity<String> addData() {
        System.out.println("🟢 Endpoint /api/messages llamado");
        try {
            return ResponseEntity.ok(service.addData());
        } catch (RuntimeException e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(e.getMessage());
        }
    }
}
