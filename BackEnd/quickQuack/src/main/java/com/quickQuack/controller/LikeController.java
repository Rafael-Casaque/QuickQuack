package com.quickQuack.controller;

import java.io.IOException;
import java.time.LocalDate;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.quickQuack.domain.model.Like;
import com.quickQuack.domain.model.User;
import com.quickQuack.domain.services.FileManagerService;

@RestController
@RequestMapping("/like")
public class LikeController {    

    @Autowired
    FileManagerService fileService;

    
    @PostMapping
    public String createLike(
            @RequestParam("user") User user,
            @RequestParam("date") LocalDate date
            ) throws IOException {
    
            Like like = new Like(user, date);
            
            return "deu certo";
            }
}
