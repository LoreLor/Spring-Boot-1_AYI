package com.ayichallenge.mesagge.services;

import java.util.Collections;
import java.util.List;
import java.util.Optional;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestClientException;
import org.springframework.web.client.RestTemplate;

import com.ayichallenge.mesagge.models.Message;
import com.ayichallenge.mesagge.models.dto.MessageDto;
import com.ayichallenge.mesagge.repository.MessageRepository;

@Service
public class MessageService {
    @Autowired
    private MessageRepository messageRepository;
    @Autowired
    private RestTemplate client;   // para comunicarme con restApi

    private static final Logger logger = LoggerFactory.getLogger(MessageService.class);


    public Optional<String> getRandomMessage() {
        List<Message> messages = messageRepository.findAll();
        if (messages.isEmpty()) {
            return Optional.empty();
        }
        Collections.shuffle(messages);

        return Optional.of(messages.get(0).getSentence());
    }


    // método para poblar la base de datos
    public String addData() {
        String apiUrl = "https://api.gameofthronesquotes.xyz/v1/random";

        try {
            // Obtener respuesta de la API externa
            MessageDto response = client.getForObject(apiUrl, MessageDto.class);
            System.out.println("📌 Respuesta cruda de la API: " + response);
            logger.info("📌 Respuesta de la API: {}", response);

            if (response != null && response.getSentence() != null) {
                Message message = new Message(null, response.getSentence());
                messageRepository.save(message);

                logger.info("✅ Mensaje guardado en la base de datos: {}", message);
                return "Mensaje cargado exitosamente";
            }

            return "⚠️ No se pudo cargar el mensaje";
        } catch (RestClientException e) {
            logger.error("🚨 Error al llamar a la API: {}", e.getMessage());
            return "Error al llamar a la API";
        }
    }
    
    
}
