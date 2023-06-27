package com.quickQuack.domain.model;

import java.time.LocalDate;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "like")
public class Like {
    @Id
    private User user;
    private LocalDate date;

    public Like(User user, LocalDate date) {
        this.user = user;
        this.date = date;
    }

    // Getters

    public LocalDate getDate() {
        return date;
    }

    // Setters

    public void setDate(LocalDate date) {
        this.date = date;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }
}
