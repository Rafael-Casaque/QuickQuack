package com.quickQuack.controller;

import java.io.IOException;
import java.time.LocalDate;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.quickQuack.domain.model.User;
import com.quickQuack.domain.services.FileManagerService;
import com.quickQuack.repositories.UserRepository;

@RestController
@RequestMapping("/user")
public class UserController {
    @Autowired
    UserRepository userRepository;

    @Autowired
    FileManagerService fileService;

    @GetMapping
    public String getUser(
            @RequestParam("username") String username) {

        User user = userRepository.findById(username)
                .orElseThrow(() -> new IllegalArgumentException("Usuário não encontrado"));

        return user.toString();
    }

    @PostMapping
    public String createUser(
            @RequestParam("name") String name,
            @RequestParam("username") String username,
            @RequestParam("password") String password,
            @RequestParam("email") String email,
            @RequestParam("biography") String biography,
            @RequestParam("birthDate") LocalDate birthDate,
            @RequestParam MultipartFile file) throws IOException {

        String originalFileName = file.getOriginalFilename();
        String extension = originalFileName.substring(originalFileName.lastIndexOf("."));
        String fileName = UUID.randomUUID().toString() + extension;

        String url = fileService.uploadFile(file, fileName);
        User user = new User(name, username, password, email, biography, url, birthDate, null, null);
        userRepository.save(user);
        return "deu certo";
    }

    @PutMapping
    public String updateUser(
            @RequestParam("name") String name,
            @RequestParam("username") String username,
            @RequestParam("password") String password,
            @RequestParam("email") String email,
            @RequestParam("biography") String biography,
            @RequestParam("birthDate") LocalDate birthDate,
            @RequestParam MultipartFile file) throws IOException {

        String originalFileName = file.getOriginalFilename();
        String extension = originalFileName.substring(originalFileName.lastIndexOf("."));
        String fileName = UUID.randomUUID().toString() + extension;

        String url = fileService.uploadFile(file, fileName);
        User updateUser = userRepository.findById(username)
                .orElseThrow(() -> new IllegalArgumentException("Usuário não encontrado"));
        updateUser.setBiography(biography);
        updateUser.setBirthDate(birthDate);
        updateUser.setEmail(email);
        updateUser.setName(name);
        updateUser.setPassword(password);
        updateUser.setProfileImage(url);
        userRepository.save(updateUser);
        return "deu certo";
    }
}
