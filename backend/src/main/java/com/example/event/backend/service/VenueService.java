package com.example.event.backend.service;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.event.backend.model.Venue;
import com.example.event.backend.repository.VenueRepo;

@Service
public class VenueService {
    @Autowired
    VenueRepo repo;

    public boolean addVenue(Venue venue) {
		repo.save(venue);
		return true;
	}

    public List<Venue> getAllVenues(){
        return repo.findAll();
    }

    public Optional<Venue> getVenueById(int id){
        return repo.findById(id);
    }

    public boolean deleteById(int id){
        repo.deleteById(id);
        return true;
    }

    public Venue updateVenue(Venue venue, int id) {
		Venue model=repo.findById(id).get();
		    model.setName(venue.getName());
			model.setAddress(venue.getAddress());
			model.setPincode(venue.getPincode());
			model.setDes(venue.getDes());
			model.setLink(venue.getLink());
			model.setPrice(venue.getPrice());
			model.setCapacity(venue.getCapacity());
			model.setContactnum(venue.getContactnum());
			model.setAvail(venue.getAvail());
			model.setRating(venue.getRating());
		
		repo.save(model);
		return model;
	};
}