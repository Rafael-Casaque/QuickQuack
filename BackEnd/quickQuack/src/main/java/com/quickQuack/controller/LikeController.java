package com.quickQuack.controller;

import java.time.LocalDate;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.quickQuack.domain.model.Like;
import com.quickQuack.domain.model.Message;
import com.quickQuack.domain.model.User;
import com.quickQuack.repositories.MessageRepository;
import com.quickQuack.repositories.UserRepository;

@RestController
@RequestMapping("/like")
public class LikeController {

    @Autowired
    UserRepository userRepository;

    @Autowired
    MessageRepository messageRepository;

    @PostMapping
    public ResponseEntity<Object> createLike(
            @RequestParam(value = "username", required = false) Optional<String> username,
            @RequestParam(value = "messageId", required = false) Optional<String> messageId) {

        if (messageId.isEmpty() || username.isEmpty())
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
        Like like = new Like(checkUser.get().getUsername(), checkUser.get(), now);
        checkMessage.get().getLikeList().add(like);
        messageRepository.save(checkMessage.get());

        return ResponseEntity.ok(checkMessage.get());

    }

    @DeleteMapping
    public ResponseEntity<Object> removeLike(
            @RequestParam(value = "username", required = false) Optional<String> username,
            @RequestParam(value = "messageId", required = false) Optional<String> messageId) {

        if (messageId.isEmpty() || username.isEmpty())
            return ResponseEntity.status(422).body("parâmetros ausentes na requisição");

        Optional<User> checkUser = userRepository.findById(username.get());
        if (!checkUser.isPresent()) {
            return ResponseEntity.status(404).body("usuário não encontrado na base de dados");
        }

        Optional<Message> checkMessage = messageRepository.findById(messageId.get());
        if (!checkMessage.isPresent()) {
            return ResponseEntity.status(404).body("mensagem não encontrada na base de dados");
        }

        Optional<Like> likeToRemove = checkMessage.get().getLikeList().stream()
                .filter(like -> like.getId().equals(username.get()))
                .findFirst();

        if (!likeToRemove.isPresent()) {
            return ResponseEntity.status(404).body("não foi encontrado uma curtida desse usuário nessa publicação");
        }

        checkMessage.get().getLikeList().remove(likeToRemove.get());
        messageRepository.save(checkMessage.get());

        return ResponseEntity.ok(checkMessage.get());

    }
}
