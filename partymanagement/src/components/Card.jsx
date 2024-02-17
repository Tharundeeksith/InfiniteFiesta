import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Button1 from './Button';
import "./Card.css";
import { useNavigate } from 'react-router';

function Card() {
    const navigate=useNavigate();
    const [events, setEvents] = useState([]);

    useEffect(() => {
        // Fetch data from backend API
        axios.get('http://localhost:8081/api/v1/auth/events/party')
            .then(response => {
                setEvents(response.data); // Set fetched events to the state
            })
            .catch(error => {
                console.error('Error fetching events:', error);
            });
    }, []); // Empty dependency array to run the effect only once

    return (
        <div>
            <div className='card'>
                {events.map(event => (
                    <div className="card1" key={event.id}>
                        <img src={event.link} alt="Event"  />
                        <div className="container1">
                            <center>
                                <h4><b>{event.type}</b></h4>
                                <p><i>{event.location}</i></p>
                                <div className='button1'>
                                    {/* <Button1 /> */}
                                    <center>
                                    <button id='bookbtn' onClick={()=>{
                                        navigate("/venues")
                                        localStorage.setItem("venue",JSON.stringify(event));
                                    }}>Book Now</button>
                                    </center>
                                    
                                </div>
                            </center>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Card;
