package com.soarStream.domain.model.entities;

import java.time.LocalDate;

public class User {
    private String name;
    private String username;
    private String password;
    private String email;
    private String biography;
    private LocalDate birthDate;

    public User(String name, String username, String password, String email, String biography, LocalDate birthDate) {
        this.name = name;
        this.username = username;
        this.password = password;
        this.email = email;
        this.biography = biography;
        this.birthDate = birthDate;
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
}
