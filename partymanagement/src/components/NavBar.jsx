import React, { useContext } from 'react';
import "./NavBar.css";
import { Link } from "react-router-dom"
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import { userContext } from './context/Context';
import Menu1 from './Menu';
function NavBar() {
    const [log,setLog]=useContext(userContext);
    return ( 
        <div>
            <div className='nav'>
                <h1 id='title'> INFINITEFIESTA</h1>
                <div className='link1'>
                 <Link to="/" id='elementnav' className="active">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/work" id='elementnav'>Work</Link>
                <Link to="/contact"id='elementnav'>Contact</Link>
                {/* <Link to="/services"id='elementnav'>Services</Link> */}
                {/* <Link to="/user">User</Link> */}
                {
                    log?
                        <Menu1/>
                        :
                <Link to="/login" id='accountbox'><AccountBoxIcon/></Link>
                }
                </div>
            </div>
        </div>
     );
}

export default NavBar;
