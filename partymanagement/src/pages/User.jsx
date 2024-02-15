import React, { useEffect, useState } from 'react'
import axios from 'axios'
import'./User.css';

export default function User() {
    const [bookings,setBookings]=useState([]);
    useEffect(() => {
      axios.get("http://localhost:8081/api/v1/bookings")
      .then((r)=>{
          setBookings(r.data)
          console.log(r.data)
      }
      )
    })
    
  return (
    <div>
        <div className="booking-container">
            <center><h1>BOOKINGS</h1></center>
            
            <div className="booking-list">
                {bookings.map((booking) => (
                    <div key={booking.id} className="booking-card">
                        <center>
                        <h2>{booking.event}</h2>
                        </center>
                        
                        <img src={booking.link} />
                        <p>Venue: {booking.venue}</p>
                        <p>Address: {booking.address}</p>
                        <p>Status: {booking.status}</p>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}
