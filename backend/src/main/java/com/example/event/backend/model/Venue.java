package com.example.event.backend.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Builder
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class Venue {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY) // Auto-generate ID
    @Column(name = "venue_id")
    private int id; // Use Long for auto-generated IDs
    
    private String name;
    private String address;
    private String link;
    private int price;
    private String status;
    // private String avail;
    // private String rating;
}
