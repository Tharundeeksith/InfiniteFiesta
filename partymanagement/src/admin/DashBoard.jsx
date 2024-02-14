import React, { useState } from 'react';
import Chart from './Chart';
import './Dashboard.css'; // Import CSS file for styling

function Dashboard() {
  // Define state variables for party data
 

  return (
    <div className="admin-dashboard">
      <div className='admin-nav'>
      <h1>Admin Dashboard - Infinite Fiesta</h1>
      <Chart/>
      </div>
      <div className="sidebar">
      <div className="sidebar-header">
        <h3>Dashboard</h3>
      </div>
      <ul className="sidebar-menu">
        <li>
          <a href="/venueaddform">Venues</a>
        </li>
        <li>
          <a href="/partyaddform">Parties</a>
        </li>
        <li>
          <a href="#users">Users</a>
        </li>
        <li>
          <a href="/login">Logout</a>
        </li>
      </ul>
    </div>
    <div className="table-container">
      <table className="admin-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Address</th>
            <th>Price</th>
            <th>Contact No</th>
            <th>Availability</th>
            <th>Rating</th>
          </tr>
        </thead>
        {/* <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{item.name} hello</td>
              <td>{item.address}</td>
              <td>{item.price}</td>
              <td>{item.contactNum}</td>
              <td>{item.avail}</td>
              <td>{item.rating}</td>
            </tr>
          ))}
        </tbody> */}
      </table>
    </div>
    </div>
    
  );
}

export default Dashboard;
