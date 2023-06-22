package com.soarStream.domain.model.entities;

import java.time.LocalDate;

public class Like {
    private LocalDate date;

    public Like(LocalDate date) {
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
}
