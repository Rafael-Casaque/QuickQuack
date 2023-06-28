package com.quickQuack.domain.model;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "comment")
public class Comment {
    @Id
    private String id;
    private User author;
    private String content;
    private LocalDate publicationDate;
    private List<Like> likeList = new ArrayList<Like>();
    private List<Comment> commentList = new ArrayList<Comment>();

    public Comment(String id, User author, String content, LocalDate publicationDate, List<Like> likeList,
            List<Comment> commentList) {
        this.id = id;
        this.author = author;
        this.content = content;
        this.publicationDate = publicationDate;
        this.likeList = likeList;
        this.commentList = commentList;
    }

    public Comment() {
    }

    public User getAuthor() {
        return author;
    }

    public void setAuthor(User author) {
        this.author = author;
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

    public void addComment(Comment comment) {
        this.commentList.add(comment);
    }

    public void addLike(Like like) {
        this.likeList.add(like);
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

}
