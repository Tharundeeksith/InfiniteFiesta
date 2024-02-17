import React, { useEffect, useState } from 'react';
import axios from 'axios'
import './VenueAddForm.css'; // Import CSS file for styling

function VenueAddForm() {
  // State variables for form inputs
  const [formData, setFormData] = useState({
    name: '',
    address:'',
    link:'',
    price:0,
    status:''
  });

  // Handle input change
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };
  const [venues, setVenues] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8081/api/v1/auth/venues")
      .then((response) => {
        setVenues(response.data);
      })
      .catch((error) => {
        console.error('Error fetching venues:', error);
      });
  }, []);

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    // console.log(formData);
    axios.post("http://localhost:8081/api/v1/auth/venues",formData)
    .then(response => {
        console.log(response.data);
        alert('Venue added successfully!'); // Show alert box
      })
      .catch(error => {
        console.error('Error adding venue:', error);
        alert('Failed to add venue. Please try again.'); // Show alert box for error
      });
    // Perform form submission logic here
    console.log(formData);
  };

  return (
    <div className="venue-add-form-container">
      <center><h2>Add Venue</h2></center>
      
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Venue Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="address">Address</label>
          <input
            type="text"
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="link">Link</label>
          <input
            type="text"
            id="link"
            name="link"
            value={formData.link}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="price">Price</label>
          <input
            type="number"
            id="price"
            name="price"
            value={formData.price}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="status">Status</label>
          <input
            type="text"
            id="status"
            name="status"
            value={formData.status}
            onChange={handleChange}
            required
          />
        </div>
        <center>
        <button type="submit" className="btn-submit">Submit</button>
        </center>
        
       
      </form>
      <div className="card-container-venue">
        {venues.map((venue) => (
          <div className="card-venue" key={venue.id}>
            <img src={venue.link} alt="Venue" />
            <div className="card-content-venue">
              <center>
              <h3>{venue.name}</h3>
              <p>{venue.address}</p>
              <p>{venue.price} Rs</p>
              {/* <p>{venue.status}</p>
              <button id='approvebtn' onClick={() => handleApprove(venue.id)}>Approve</button> */}
              </center>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default VenueAddForm;
