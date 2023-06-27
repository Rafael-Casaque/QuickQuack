package com.quickQuack.domain.model;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "message")
public class Message {
    @Id

    private String id;

    private String media;

    private String content;

    private LocalDate publicationDate;

    private int likeCount;

    private int shareCount;

    private List<Like> likeList = new ArrayList<Like>(); 

    private List<Comment> commentList = new ArrayList<Comment>();
    
    public Message() {
    }

    public Message(String id, String media, String content, LocalDate publicationDate, int likeCount, int shareCount,
            List<Like> likeList, List<Comment> commentList) {
        this.id = id;
        this.media = media;
        this.content = content;
        this.publicationDate = publicationDate;
        this.likeCount = likeCount;
        this.shareCount = shareCount;
        this.likeList = likeList;
        this.commentList = commentList;
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

    public void setId(String id) {
        this.id = id;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public String getMedia() {
        return media;
    }

    public void setMedia(String media) {
        this.media = media;
    }

    public void setPublicationDate(LocalDate publicationDate) {
        this.publicationDate = publicationDate;
    }

    public void setLikeCount(int likeCount) {
        this.likeCount = likeCount;
    }

    public void setShareCount(int shareCount) {
        this.shareCount = shareCount;
    }

    public void setLikeList(List<Like> likeList) {
        this.likeList = likeList;
    }

    public List<Comment> getCommentList() {
        return commentList;
    }

    public void setCommentList(List<Comment> commentList) {
        this.commentList = commentList;
    }

    @Override
    public String toString() {
        return "Message [id=" + id + ", media=" + media + ", content=" + content+ ", publicationDate=" + publicationDate                + ", likeCount=" + likeCount + ", shareCount=" + shareCount + "]";
    }
}
