import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Sidebar from './Sidebar'; // Import the Sidebar component
import './Dashboard.css'; // Import CSS file for styling

function Dashboard() {
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

  const handleApprove = (id) => {
    axios.put(`http://localhost:8081/api/v1/auth/venues/${id}`, {
      status: "Approved"
    }).then((response) => {
      // Update the status locally after successful approval
      const updatedVenues = venues.map((venue) =>
        venue.id === id ? { ...venue, status: "Approved" } : venue
      );
      setVenues(updatedVenues);
      // Handle success if needed
    }).catch((error) => {
      console.error('Error approving venue:', error);
    });
  };

  return (
    <div className="dashboard-container">
      <Sidebar />
      <div className="card-container-venue">
        {venues.map((venue) => (
          <div className="card-venue" key={venue.id}>
            <img src={venue.link} alt="Venue" />
            <div className="card-content-venue">
              <center>
              <h3>{venue.name}</h3>
              <p>{venue.address}</p>
              <p>{venue.price} Rs</p>
              <p>{venue.status}</p>
              <button id='approvebtn' onClick={() => handleApprove(venue.id)}>Approve</button>
              </center>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Dashboard;
