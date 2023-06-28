package com.quickQuack.controller;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.Optional;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.quickQuack.domain.model.Comment;
import com.quickQuack.domain.model.Like;
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
    public ResponseEntity<Object> createComment(
            @RequestParam(value = "username", required = false) Optional<String> username,
            @RequestParam(value = "content", required = false) Optional<String> content,
            @RequestParam(value = "messageId", required = false) Optional<String> messageId) {

        if (messageId.isEmpty() || username.isEmpty() || content.isEmpty())
            return ResponseEntity.status(422).body("parâmetros ausentes na requisição");

        Optional<User> checkUser = userRepository.findById(username.get());
        if (!checkUser.isPresent()) {
            return ResponseEntity.status(404).body("usuário não encontrado na base de dados");
        }

        Optional<Message> checkMessage = messageRepository.findById(messageId.get());
        if (!checkMessage.isPresent()) {
            return ResponseEntity.status(404).body("mensagem não encontrada na base de dados");
        }

        LocalDate now = LocalDate.now();

        ArrayList<Like> likeList = new ArrayList<Like>();
        ArrayList<Comment> commentList = new ArrayList<Comment>();

        Comment comment = new Comment(username.get() + UUID.randomUUID().toString(), checkUser.get(), content.get(),
                now, likeList, commentList);
        checkMessage.get().getCommentList().add(comment);
        messageRepository.save(checkMessage.get());

        return ResponseEntity.ok(checkMessage.get());

    }
}
