package com.quickQuack.domain.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

import com.quickQuack.domain.model.Message;
import com.quickQuack.repositories.MessageRepository;

public class MessageService {
    private MessageRepository messageRepository;

    @Autowired
    public MessageService(MessageRepository messageRepository) {
        this.messageRepository = messageRepository;
    }

    public List<Message> getMessagesByRange(int startIndex, int endIndex) {
        return messageRepository.findAll().subList(startIndex, endIndex);
    }
}
