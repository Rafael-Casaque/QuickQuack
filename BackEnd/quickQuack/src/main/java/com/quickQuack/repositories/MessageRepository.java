package com.quickQuack.repositories;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.repository.MongoRepository;

import com.quickQuack.domain.model.Message;

public interface MessageRepository extends MongoRepository<Message,Id>{
    
}
