package com.soarStream.domain.model.entities;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

public class Message {

    private String id;

    private String content;

    private LocalDate publicationDate;

    private int likeCount;

    private int shareCount;

    private List<Like> likeList = new ArrayList<Like>(); 

    //private List<> commentList;

    public Message(String id, String content, LocalDate publicationDate){
        this.id = id;
        this.content = content;
        this.publicationDate = publicationDate;
    }
    
    public void addLike(){
        likeCount++;
    }

    public void removeLike(){
        likeCount--;
    }

    //public void shareMessage(){}


// Getters

    public String getId() {
        return id;
    }

    public String getContent() {
        return content;
    }

    public LocalDate getPublicationDate() {
        return publicationDate;
    }

    public int getLikeCount() {
        return likeCount;
    }

    public int getShareCount() {
        return shareCount;
    }

    public List<Like> getLikeList() {
        return likeList;
    }

// Setters

    public void setContent(String content) {
        this.content = content;
    }


}
