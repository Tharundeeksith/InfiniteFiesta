package com.example.event.backend.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Builder
@Data
@Entity
@AllArgsConstructor
@NoArgsConstructor
public class Bookings {
    @Id
    @Column(name="bid")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    int eid;
    // String venue;
    // String event;
    private String event;
    private String link;
    private String venue;
    private String address;
    private String status;
    
}
