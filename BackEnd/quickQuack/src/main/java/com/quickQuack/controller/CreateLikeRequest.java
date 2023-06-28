package com.quickQuack.controller;

public class CreateLikeRequest {
    private String username;
    private String messageId;

    public CreateLikeRequest() {
    }

    public CreateLikeRequest(String username, String messageId) {
        this.username = username;
        this.messageId = messageId;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getMessageId() {
        return messageId;
    }

    public void setMessageId(String messageId) {
        this.messageId = messageId;
    }
}

