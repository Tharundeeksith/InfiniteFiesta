import React, { useState } from 'react';
import axios from 'axios'
import './VenueAddForm.css'; // Import CSS file for styling

function VenueAddForm() {
  // State variables for form inputs
  const [formData, setFormData] = useState({
    name: '',
    des:'',
    link:'',
    price:'',
    location: '',
    capacity: '',
    avail:''
  });

  // Handle input change
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post("http://localhost:8081/api/v1/auth/venues",formData)
    // Perform form submission logic here
    console.log(formData);
  };

  return (
    <div className="venue-add-form-container">
      <h2>Add Venue</h2>
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
          <label htmlFor="description">Description</label>
          <input
            type="number"
            id="description"
            name="description"
            value={formData.des}
            onChange={handleChange}
            // required
          />
        </div>
        <div className="form-group">
          <label htmlFor="location">Location</label>
          <input
            type="text"
            id="location"
            name="location"
            value={formData.location}
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
            type="text"
            id="price"
            name="price"
            value={formData.price}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="capacity">Capacity</label>
          <input
            type="number"
            id="capacity"
            name="capacity"
            value={formData.capacity}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="availability">Availability</label>
          <input
            type="text"
            id="availability"
            name="availability"
            value={formData.avail}
            onChange={handleChange}
            // required
          />
        </div>
        <button type="submit" className="btn-submit">Submit</button>
      </form>
    </div>
  );
}

export default VenueAddForm;
