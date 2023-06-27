package com.quickQuack.domain.model;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "message")
public class Message {        

    private String media;
    private String content;
    private LocalDate publicationDate;    
    private List<Like> likeList = new ArrayList<Like>(); 
    private List<Comment> commentList = new ArrayList<Comment>();
    private List<User> shareList = new ArrayList<User>();
    
    public Message() {
    }

    public Message(String media, String content, LocalDate publicationDate, List<Like> likeList,
            List<Comment> commentList, List<User> shareList) {
        this.media = media;
        this.content = content;
        this.publicationDate = publicationDate;
        this.likeList = likeList;
        this.commentList = commentList;
        this.shareList = shareList;
    }

    public String getMedia() {
        return media;
    }

    public void setMedia(String media) {
        this.media = media;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public LocalDate getPublicationDate() {
        return publicationDate;
    }

    public void setPublicationDate(LocalDate publicationDate) {
        this.publicationDate = publicationDate;
    }

    public List<Like> getLikeList() {
        return likeList;
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

    public List<User> getShareList() {
        return shareList;
    }

    public void setShareList(List<User> shareList) {
        this.shareList = shareList;
    }        

    public void addLike(Like like){
        this.likeList.add(like);
    }

    public void addComment(Comment comment){
        this.commentList.add(comment);
    }

    public void addShare(User user){
        this.shareList.add(user);
    }
    
}
