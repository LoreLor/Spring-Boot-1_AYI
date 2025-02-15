package com.ayichallenge.mesagge;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.stereotype.Component;

import com.ayichallenge.mesagge.services.MessageService;

@SpringBootApplication
public class MesaggeApplication {

	public static void main(String[] args) {
		SpringApplication.run(MesaggeApplication.class, args);
	}
	
	// carga de mensajes al inicio
	@Component
	class DataInitializer implements CommandLineRunner {

		private final MessageService messageService;

		public DataInitializer(MessageService messageService) {
			this.messageService = messageService;
		}

		@Override
		public void run(String... args) throws Exception {
			System.out.println("Iniciando carga de datos...");

			for (int i = 0; i < 10; i++) {
				messageService.addData(); // Llama al método que carga un mensaje desde la API
			}

			System.out.println("Mensajes cargados correctamente.");
		}

	}
}