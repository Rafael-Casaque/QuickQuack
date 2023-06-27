package com.quickQuack.domain.model;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "comment")
public class Comment {
    private String id;
    
    private User author;

    private String content;

    private LocalDate publicationDate;

    private int likeCount;

    private List<Like> likeList = new ArrayList<Like>();

    public Comment(String id, User author, String content, LocalDate publicationDate) {
        this.id = id;
        this.author = author;
        this.content = content;
        this.publicationDate = publicationDate;
    }

    public void addLike(){
        likeCount++;
    }

    public void removeLike(){
        likeCount--;
    }

    
// Getters

    public String getId() {
        return id;
    }

    public User getAuthor() {
        return author;
    }

    public LocalDate getPublicationDate() {
        return publicationDate;
    }
    
    public String getContent() {
        return content;
    }

    public int getLikeCount() {
        return likeCount;
    }

    public List<Like> getLikeList() {
        return likeList;
    }

// Setters

    public void setAuthor(User author) {
        this.author = author;
    }

    public void setContent(String content) {
        this.content = content;
    }
}
