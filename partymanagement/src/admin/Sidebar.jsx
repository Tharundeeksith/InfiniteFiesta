import React from 'react'
import "./SideBar.css"

export default function 
() {
  return (
    <div>
        <div className="sidebar">
      <div className="sidebar-header">
        <h3>ADMIN DASHBOARD</h3>
      </div>
      <ul className="sidebar-menu">
        <li>
          <a href="/venueaddform">Venues</a>
        </li>
        <li>
          <a href="/partyaddform">Parties</a>
        </li>
        {/* <li>
          <a href="#users">Users</a>
        </li> */}
        <li>
          <a href="/login">Logout</a>
        </li>
      </ul>
    </div>
    </div>
  )
}
