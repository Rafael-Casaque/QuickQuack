package com.quickQuack.domain.model;

import java.time.LocalDate;
import java.util.ArrayList;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "user")
public class User {
    private String name;
    @Id
    private String username;
    private String password;
    private String email;
    private String biography;
    private String profileImage;
    private LocalDate birthDate;
    private ArrayList<User> followList;
    private ArrayList<User> followerList;
    private ArrayList<Message> messageList;

    public User() {
    }

    public User(String name, String username, String profileImage) {
        this.name = name;
        this.username = username;
        this.profileImage = profileImage;
    }

    public User(String name, String username, String password, String email, LocalDate birthDate,
            ArrayList<User> followList, ArrayList<User> followerList, ArrayList<Message> messageList, String profileImage) {
        this.name = name;
        this.username = username;
        this.password = password;
        this.email = email;
        this.birthDate = birthDate;
        this.followList = followList;
        this.followerList = followerList;
        this.messageList = messageList;
        this.profileImage = profileImage;
    }

    public User(String name, String username, String password, String email, String biography, String profileImage,
            LocalDate birthDate, ArrayList<User> followList, ArrayList<User> followerList) {
        this.name = name;
        this.username = username;
        this.password = password;
        this.email = email;
        this.biography = biography;
        this.profileImage = profileImage;
        this.birthDate = birthDate;
        this.followList = followList;
        this.followerList = followerList;
    }

    // Getters

    public String getName() {
        return name;
    }

    public String getUsername() {
        return username;
    }

    public String getPassword() {
        return password;
    }

    public String getEmail() {
        return email;
    }

    public String getBiography() {
        return biography;
    }

    public LocalDate getBirthDate() {
        return birthDate;
    }

    // Setters

    public void setName(String name) {
        this.name = name;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public void setBiography(String biography) {
        this.biography = biography;
    }

    public void setBirthDate(LocalDate birthDate) {
        this.birthDate = birthDate;
    }

    public String getProfileImage() {
        return profileImage;
    }

    public void setProfileImage(String profileImage) {
        this.profileImage = profileImage;
    }

    public ArrayList<User> getFollowList() {
        return followList;
    }

    public void setFollowList(ArrayList<User> followList) {
        this.followList = followList;
    }

    public ArrayList<User> getFollowerList() {
        return followerList;
    }

    public void setFollowerList(ArrayList<User> followerList) {
        this.followerList = followerList;
    }

    public ArrayList<Message> getMessageList() {
        return messageList;
    }

    public void setMessageList(ArrayList<Message> messageList) {
        this.messageList = messageList;
    }

    public void addMessage(Message message) {
        this.messageList.add(message);
    }

}
