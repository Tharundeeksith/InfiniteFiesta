package com.example.event.backend.repository;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.event.backend.model.AdminEvent;



@Repository
public interface AdminEventRepo extends JpaRepository<AdminEvent, Integer>{
    
}
