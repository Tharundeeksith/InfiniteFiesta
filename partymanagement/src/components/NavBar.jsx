import React from 'react';
import "./NavBar.css";
function NavBar() {
    return ( 
        <div>
            <div className='nav'>
                <h1 id='title'>INFINITEFIESTA</h1>
                <div className='link1'>
                    <a class="active" href="#home">Home</a>
                    <a href="#news">About</a>
                    <a href="#work">Work</a>
                    <a href="#contact">Contact</a>
                    <a href="#about">Services</a>
                    <a href="#login">Login</a>
                </div>
            </div>
        </div>
     );
}

export default NavBar;