package com.quickQuack.controller;

import java.io.IOException;
import java.util.List;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.quickQuack.domain.model.Message;
import com.quickQuack.domain.services.FileManagerService;
import com.quickQuack.domain.services.MessageService;
import com.quickQuack.repositories.MessageRepository;

@RestController
@RequestMapping("/message")
public class MessageController {
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
    public String createMessage(
            @RequestParam("id") String id,
            @RequestParam MultipartFile file,
            @RequestParam("content") String content,
            @RequestParam("likeCount") int likeCount,
            @RequestParam("shareCount") int shareCount) throws IOException {

        String originalFileName = file.getOriginalFilename();
        String extension = originalFileName.substring(originalFileName.lastIndexOf("."));
        String fileName = UUID.randomUUID().toString() + extension;

        String url = fileService.uploadFile(file, fileName);

        Message message = new Message(null, url, content, null, null, null, null);

        messageRepository.save(message);
        return "deu certo";
    }
}
