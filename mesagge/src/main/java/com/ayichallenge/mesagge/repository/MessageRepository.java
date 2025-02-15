package com.ayichallenge.mesagge.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ayichallenge.mesagge.models.Message;



public interface MessageRepository extends JpaRepository<Message, Long>{
    
}
