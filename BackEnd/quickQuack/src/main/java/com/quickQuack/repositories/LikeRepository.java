package com.quickQuack.repositories;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.repository.MongoRepository;

import com.quickQuack.domain.model.Like;

public interface LikeRepository extends MongoRepository<Like,Id>{
    
}
