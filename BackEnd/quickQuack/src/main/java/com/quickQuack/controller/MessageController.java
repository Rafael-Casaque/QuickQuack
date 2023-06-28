package com.quickQuack.controller;

import java.io.IOException;
import java.time.LocalDate;
import java.util.List;
import java.util.Optional;
import java.util.UUID;
import java.util.stream.Collectors;

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
    public ResponseEntity<Object> consultarRegistros(
            @RequestParam(required = false) String findBy,
            @RequestParam(required = false) Optional<String> username,
            @RequestParam(required = false) Optional<Integer> start,
            @RequestParam(required = false) Optional<Integer> end) {
        MessageService messageService = new MessageService(messageRepository);
        if (start.isEmpty() || end.isEmpty())
            return ResponseEntity.status(422).body("parâmetros ausentes na requisição");
        if (findBy.isEmpty()) {
            List<Message> messageList = messageService.getMessagesByRange(start.get(), end.get());
            return ResponseEntity.ok(messageList);
        }
        if (findBy.equals("myMessages")) {
            if (username.isEmpty())
                return ResponseEntity.status(422).body("parâmetros ausentes na requisição");

            Optional<User> user = userRepository.findById(username.get());
            if (!user.isPresent())
                return ResponseEntity.status(404).body("usuário não encontrado na base de dados");

            List<Message> messageList = user.get().getMessageList().subList(start.get(), end.get());

            return ResponseEntity.ok(messageList);
        }

        if (findBy.equals("followerMessage")) {
            if (username.isEmpty()) {
                return ResponseEntity.status(422).body("parâmetros ausentes na requisição");
            }

            Optional<User> user = userRepository.findById(username.get());
            if (!user.isPresent()) {
                return ResponseEntity.status(404).body("usuário não encontrado na base de dados");
            }

            List<Message> followMessages = messageRepository.findAll()
                    .stream()
                    .filter(message -> user.get().getFollowList().contains(message.getAuthor()))
                    .collect(Collectors.toList());

            return ResponseEntity.ok(followMessages.subList(start.get(), end.get()));
        }

        List<Message> filteredMessages = messageRepository.findAll()
                .stream()
                .filter(message -> !message.getAuthor().getUsername().equals(username.get()))
                .collect(Collectors.toList());

        return ResponseEntity.ok(filteredMessages.subList(start.get(), end.get()));
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
