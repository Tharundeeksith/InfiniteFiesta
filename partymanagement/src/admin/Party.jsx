import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Party.css';

function Party() {
  const [parties, setParties] = useState([]);
  const [partyName, setPartyName] = useState('');
  const [link, setLink] = useState('');
  const [location, setLocation] = useState('');

  useEffect(() => {
    // Fetch parties from backend when component mounts
    fetchParties();
  }, []);

  const fetchParties = async () => {
    try {
      const response = await axios.get('http://localhost:8081/api/v1/auth/events/party');
      setParties(response.data);
    } catch (error) {
      console.error('Error fetching parties:', error);
    }
  };

  const addParty = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8081/api/v1/auth/events', {
        type: partyName,
        link: link,
        location: location
      });
      setParties([...parties, response.data]);
      // Clear form fields after successful submission
      setPartyName('');
      setLink('');
      setLocation('');
    } catch (error) {
      console.error('Error adding party:', error);
    }
  };

  const deleteParty = async (id) => {
    try {
      await axios.delete(`http://localhost:8081/api/v1/auth/events/${id}`);
      setParties(parties.filter(party => party.id !== id));
    } catch (error) {
      console.error('Error deleting party:', error);
    }
  };

  return (
    <div className="party-dashboard">
      <div className='party-nav'>
        <h1>ADD EVENT</h1>
      </div>
      <form onSubmit={addParty}>
        <input type="text" placeholder="Party Name" value={partyName} onChange={(e) => setPartyName(e.target.value)} />
        <input type="url" placeholder="Link" value={link} onChange={(e) => setLink(e.target.value)} />
        <input type="text" placeholder="Location" value={location} onChange={(e) => setLocation(e.target.value)} />
        <center>
        <button type="submit" id='add-event'>Add Event</button>
        </center>
        
      </form>
      <div className="party-list">
        {parties.map((party, index) => (
          <div key={index} className="party-item">
            <center>
              <h3>{party.type}</h3>
            </center>
            <img src={party.link} />
            <center>
              <p>{party.location}</p>
            </center>
            {/* <button onClick={() => deleteParty(party.id)}>Delete</button> */}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Party;
