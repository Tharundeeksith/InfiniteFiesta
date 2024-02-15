import React, { useState, useEffect } from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ListSubheader from '@mui/material/ListSubheader';
import IconButton from '@mui/material/IconButton';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import axios from 'axios'; // Import axios for making HTTP requests
import { useNavigate } from 'react-router';

export default function Venues() {
  const [venues, setVenues] = useState([]);
  const navigate=useNavigate()

  useEffect(() => {
    // Fetch venues from backend when component mounts
    fetchVenues();
  }, []);

  const fetchVenues = async () => {
    try {
      const response = await axios.get('http://localhost:8081/api/v1/auth/venues');
      setVenues(response.data);
    } catch (error) {
      console.error('Error fetching venues:', error);
    }
  };

  return (
    <ImageList sx={{ width: 1000, height: 850, marginLeft: '16%' }}>
      <ImageListItem key="Subheader" cols={2}>
        <ListSubheader component="div" sx={{ textAlign: 'center', fontSize: '6ch' }}>VENUES</ListSubheader>
      </ImageListItem>
      {venues.map((venue) => (
        <ImageListItem key={venue.id}>
          <img
            src={venue.link}
            alt={venue.name}
            loading="lazy"
          />
          <ImageListItemBar
            title={venue.name}
            subtitle={venue.address}
            actionIcon={
              <IconButton
                sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                aria-label={`info about ${venue.name}`}
                // Handle click event, e.g., navigate to venue details page
                onClick={() => {
                  let event=localStorage.getItem("venue");
                  let n=JSON.parse(event);
                  let name=n.type;
                  let arr={"event":name,"venue":venue.name,"link":venue.link,"address":venue.address,"status":"Pending"};
                  axios.post("http://localhost:8081/api/v1/bookings",arr);
                  navigate("/user")
                }}
              >
                <LocalMallIcon />
              </IconButton>
            }
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}
