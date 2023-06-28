package com.quickQuack.controller;

import org.springframework.web.multipart.MultipartFile;

public class CreateMessageRequest {
    private String content;
    private String username;
    private MultipartFile file;

    public CreateMessageRequest() {
    }

    public CreateMessageRequest(String content, String username, MultipartFile file) {
        this.content = content;
        this.username = username;
        this.file = file;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public MultipartFile getFile() {
        return file;
    }

    public void setFile(MultipartFile file) {
        this.file = file;
    }
}

