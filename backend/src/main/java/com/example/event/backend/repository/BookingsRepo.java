package com.example.event.backend.repository;

import com.example.event.backend.model.Bookings;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BookingsRepo extends JpaRepository<Bookings, Integer> {
    // Add custom query methods if needed
}
