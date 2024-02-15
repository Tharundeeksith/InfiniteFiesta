package com.example.event.backend.service;

import com.example.event.backend.model.Bookings;
import com.example.event.backend.repository.BookingsRepo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class BookingsService {

    private final BookingsRepo bookingsRepo;

    @Autowired
    public BookingsService(BookingsRepo bookingsRepo) {
        this.bookingsRepo = bookingsRepo;
    }

    public Bookings addBooking(Bookings booking) {
        return bookingsRepo.save(booking);
    }

    public List<Bookings> getAllBookings() {
        return bookingsRepo.findAll();
    }

    public Optional<Bookings> getBookingById(int id) {
        return bookingsRepo.findById(id);
    }

    public boolean deleteBookingById(int id) {
        if (bookingsRepo.existsById(id)) {
            bookingsRepo.deleteById(id);
            return true;
        }
        return false;
    }

    public Bookings updateBooking(Bookings booking, int id) {
        if (bookingsRepo.existsById(id)) {
            booking.setEid(id);
            return bookingsRepo.save(booking);
        }
        return null;
    }
}
