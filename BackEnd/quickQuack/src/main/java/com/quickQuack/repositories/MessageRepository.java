package com.quickQuack.repositories;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

import com.quickQuack.domain.model.Message;

public interface MessageRepository extends MongoRepository<Message,String>{
    
    @Query("{ '_id': { $gte: ?0, $lte: ?1 } }")
    List<Message> findAllByStartAndEnd(String start, String end);
}
