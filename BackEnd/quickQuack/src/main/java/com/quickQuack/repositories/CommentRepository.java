package com.quickQuack.repositories;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.repository.MongoRepository;

import com.quickQuack.domain.model.Comment;

public interface CommentRepository extends MongoRepository<Comment,Id>{
    
}
