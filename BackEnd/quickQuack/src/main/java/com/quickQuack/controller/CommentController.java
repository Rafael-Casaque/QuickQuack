package com.quickQuack.controller;

import java.time.LocalDate;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.quickQuack.domain.model.Comment;
import com.quickQuack.domain.model.Message;
import com.quickQuack.domain.model.User;
import com.quickQuack.repositories.MessageRepository;
import com.quickQuack.repositories.UserRepository;

@RestController
@RequestMapping("/comment")
public class CommentController {    

    @Autowired
    MessageRepository messageRepository;

    @Autowired
    UserRepository userRepository;

    @PostMapping
    public String createComment(
            @RequestParam("username") String username,
            @RequestParam("content") String content,
            @RequestParam("idMessage") String idMessage) {

        Optional<User> user = userRepository.findById(username);
        Optional<Message> message = messageRepository.findById(idMessage);

        LocalDate publicationDate = LocalDate.now();

        if (user.isPresent() && message.isPresent()) {
            user.get().setPassword(null);
            Comment comment = new Comment(user.get(), content, publicationDate, null, null);
            message.get().getCommentList().add(comment);
            messageRepository.save(message.get());
            return "deu certo";
        }
        return "deu errado";
    }
}
