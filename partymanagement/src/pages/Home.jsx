import React from 'react'
import { useNavigate } from 'react-router';
import Card from '../components/Card';
import Footer from '../components/Footer';
import NavBar from '../components/NavBar';
import"./Home.css";
function Home() {
    const navigate = useNavigate();
    return (  
        <div>
            <NavBar/>
            <div className='home-container'>
                <img id='homeimg1' src="https://static.wixstatic.com/media/11062b_045f5c6fc0e14808bce8b4ec91e4ec0c~mv2.jpg/v1/fill/w_2620,h_1480,fp_0.50_0.50,q_90,usm_0.66_1.00_0.01,enc_auto/11062b_045f5c6fc0e14808bce8b4ec91e4ec0c~mv2.jpg" alt="" />
                <h1 className='text'>INFINITEFIESTA</h1>
                <p id='p1' onClick={() => navigate('/about')}>Learn More</p>
            </div>
            <div className='sub1-container'>
                <h2 id='subscribe'>Subscribe Form</h2>
                <input type="email" id="emailhome" name="email" placeholder=' eg.,email@example.com'/>
                <button id='buttonhome' type="submit">Join</button>
            </div>
            <div className="hevents">
                <h1>PAST EVENTS</h1>
                <p><i>Unforgettable Memories</i></p>
            </div>
            <Card/>
            <Footer/>



           


        </div>
    );
}

export default Home;