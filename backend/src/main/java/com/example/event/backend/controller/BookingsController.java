package com.example.event.backend.controller;

import com.example.event.backend.model.Bookings;
import com.example.event.backend.service.BookingsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin("*")
@RequestMapping("/api/v1/bookings")
public class BookingsController {

    private final BookingsService bookingsService;

    @Autowired
    public BookingsController(BookingsService bookingsService) {
        this.bookingsService = bookingsService;
    }

    @PostMapping("")
    public ResponseEntity<?> addBooking(@RequestBody Bookings booking) {
        // try {
            Bookings newBooking = bookingsService.addBooking(booking);
            return new ResponseEntity<>(newBooking, HttpStatus.CREATED);
        // } 
        
    }

    @GetMapping("")
    public ResponseEntity<List<Bookings>> getAllBookings() {
        List<Bookings> bookings = bookingsService.getAllBookings();
        return new ResponseEntity<>(bookings, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> getBookingById(@PathVariable int id) {
        Optional<Bookings> booking = bookingsService.getBookingById(id);
        if (booking.isPresent()) {
            return new ResponseEntity<>(booking.get(), HttpStatus.OK);
        } else {
            return new ResponseEntity<>("Booking not found", HttpStatus.NOT_FOUND);
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteBookingById(@PathVariable int id) {
        boolean deleted = bookingsService.deleteBookingById(id);
        if (deleted) {
            return new ResponseEntity<>("Booking deleted successfully", HttpStatus.OK);
        } else {
            return new ResponseEntity<>("Failed to delete booking", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PutMapping("/{id}")
    public ResponseEntity<?> updateBooking(@RequestBody Bookings booking, @PathVariable int id) {
        try {
            Bookings updatedBooking = bookingsService.updateBooking(booking, id);
            return new ResponseEntity<>(updatedBooking, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>("Failed to update booking", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
