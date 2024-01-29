
import React from 'react';
import Card from '../components/Card';
import Footer from '../components/Footer';
import NavBar from '../components/NavBar';
import "./Work.css"
function Work() {
    return ( 
        <div>
            <NavBar/>
            <div className='work-title'>
            <center><h1>EVENT HIGHLIGHTS</h1></center>
            <center><p><i>What We’ve Pulled Off</i></p></center>
            </div>
            
            <Card/>
            <Footer/>
        </div>
     );
}

export default Work;