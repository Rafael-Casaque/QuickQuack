package com.quickQuack.controller;

public class CreateCommentRequest {
    private String username;
    private String content;
    private String messageId;

    public CreateCommentRequest() {
    }

    public CreateCommentRequest(String username, String content, String messageId) {
        this.username = username;
        this.content = content;
        this.messageId = messageId;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public String getMessageId() {
        return messageId;
    }

    public void setMessageId(String messageId) {
        this.messageId = messageId;
    }
}
