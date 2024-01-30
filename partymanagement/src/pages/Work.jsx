
import React from 'react';
import Card from '../components/Card';
import Footer from '../components/Footer';
import NavBar from '../components/NavBar';
import Slideshow from '../components/SlideShow';
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
            <center>
                <h1 id='gallery'>Gallery</h1>
                <p id='gallery1'><i>Canvas of emotions</i></p>
            <Slideshow/>
            </center>
            <Footer/>
        </div>
     );
}

export default Work;