package com.quickQuack.controller;

import java.io.IOException;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.Optional;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.quickQuack.domain.model.Message;
import com.quickQuack.domain.model.User;
import com.quickQuack.domain.services.FileManagerService;
import com.quickQuack.repositories.UserRepository;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/user")
public class UserController {
    @Autowired
    UserRepository userRepository;

    @Autowired
    FileManagerService fileService;

    @GetMapping
    public ResponseEntity<Object> getUser(@RequestParam(required = false) String username) {
        if (username == null) {
            return ResponseEntity.status(422).body("parâmetro ausente na requisição");
        }

        Optional<User> user = userRepository.findById(username);
        if (!user.isPresent()) {
            return ResponseEntity.status(404).body("usuário não encontrado na base de dados");
        }

        return ResponseEntity.ok(user.get());
    }

    @PostMapping
    public ResponseEntity<String> createUser(@RequestBody User user) {
        String name = user.getName();
        String username = user.getUsername();
        String password = user.getPassword();
        String email = user.getEmail();
        LocalDate birthDate = user.getBirthDate();

        if (name.isEmpty() || username.isEmpty() || password.isEmpty() || email.isEmpty() || birthDate == null) {
            return ResponseEntity.status(422).body("parâmetros ausentes na requisição");
        }

        Optional<User> checkUser = userRepository.findById(username);
        if (checkUser.isPresent()) {
            return ResponseEntity.status(422).body("usuário já existente na base de dados");
        }

        ArrayList<Message> messageList = new ArrayList<>();
        ArrayList<User> followList = new ArrayList<>();
        ArrayList<User> followerList = new ArrayList<>();

        User newUser = new User(name, username, password, email, birthDate, followList, followerList, messageList, name);
        userRepository.save(newUser);
        return ResponseEntity.status(201).body("usuário criado com sucesso!");
    }


    @PutMapping
    public ResponseEntity<String> updateUser(
            @RequestParam(value = "email", required = false) Optional<String> email,
            @RequestParam(value = "name", required = false) Optional<String> name,
            @RequestParam(value = "username", required = false) Optional<String> username,
            @RequestParam(value = "password", required = false) Optional<String> password,
            @RequestParam(value = "birthDate", required = false) Optional<LocalDate> birthDate,
            @RequestParam(value = "biography", required = false) Optional<String> biography,
            @RequestParam Optional<MultipartFile> file) {

        Optional<User> checkUser = userRepository.findById(username.get());

        if (!checkUser.isPresent())
            return ResponseEntity.status(404).body("usuário não encontrado na base de dados");

        String url;

        if (checkUser.get().getProfileImage() == null)
            url = checkUser.get().getName();
        else
            url = checkUser.get().getProfileImage();

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
        User user = checkUser.get();
        user.setBiography(biography.orElse(user.getBiography()));
        user.setBirthDate(birthDate.orElse(user.getBirthDate()));
        user.setEmail(email.orElse(user.getEmail()));
        user.setName(name.orElse(user.getName()));
        user.setPassword(password.orElse(user.getPassword()));
        user.setProfileImage(url);
        userRepository.save(user);
        return ResponseEntity.status(200).body("atualizado com sucesso!");
    }
}
