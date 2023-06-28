package com.quickQuack.controller;

import java.io.IOException;
import java.time.LocalDate;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.quickQuack.domain.model.Message;
import com.quickQuack.domain.model.User;
import com.quickQuack.domain.services.FileManagerService;
import com.quickQuack.domain.services.MessageService;
import com.quickQuack.repositories.MessageRepository;
import com.quickQuack.repositories.UserRepository;

@RestController
@RequestMapping("/message")
public class MessageController {

    @Autowired
    UserRepository userRepository;

    @Autowired
    MessageRepository messageRepository;

    @Autowired
    FileManagerService fileService;

    @GetMapping
    public List<Message> consultarRegistros(
            @RequestParam("start") int start,
            @RequestParam("end") int end) {
        MessageService messageService = new MessageService(messageRepository);
        return messageService.getMessagesByRange(start, end);
    }

    @PostMapping
    public ResponseEntity<Object> createMessage(
            @RequestParam Optional<MultipartFile> file,
            @RequestParam(value = "content", required = false) Optional<String> content,
            @RequestParam(value = "username", required = false) Optional<String> username

    ) {

        if (content.isEmpty() || username.isEmpty())
            return ResponseEntity.status(422).body("parâmetros ausentes na requisição");

        Optional<User> checkUser = userRepository.findById(username.get());
        if (!checkUser.isPresent()) {
            return ResponseEntity.status(404).body("usuário não encontrado na base de dados");
        }

        User user = new User(checkUser.get().getName(), checkUser.get().getUsername(),
                checkUser.get().getProfileImage());

        String url = null;

        if (file.isPresent()) {
            try {
                String originalFileName = file.get().getOriginalFilename();
                String extension = originalFileName.substring(originalFileName.lastIndexOf("."));
                String fileName = UUID.randomUUID().toString() + extension;
                url = fileService.uploadFile(file.get(), fileName);
            } catch (IOException e) {
                return ResponseEntity.status(500).body("deu errado aqui!");
            }
        }

        LocalDate now = LocalDate.now();

        Message message = new Message(username.get() + UUID.randomUUID().toString(), user, url, content.get(), now,
                null, null, null);

        checkUser.get().getMessageList().add(message);

        messageRepository.save(message);
        userRepository.save(checkUser.get());
        return ResponseEntity.ok(message);
    }
}
