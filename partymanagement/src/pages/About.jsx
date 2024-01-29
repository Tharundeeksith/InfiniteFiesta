import React from 'react'
import Footer from '../components/Footer';
import NavBar from '../components/NavBar';
import Pricing from '../components/Pricing';
import "./About.css";
function About() {
    return ( 
        <div>
            <NavBar/>
            <div className='abt-whole'>
            <div className='abt'>
                <h2>WHAT WE’RE ALL ABOUT</h2>
                <p>We at InfiniteFiesta are a group of seasoned specialists, passionate about curating unforgettable experiences that inspire. With accomplished event producers and some of the most creative minds in the industry, our Event Planning Company delivers on every project, from initial concept through the event itself.</p>
                <p>Since 2000, we have worked with a large number of clients from many different backgrounds, tailoring each event to meet their specific needs and desires. We love taking care of people, and thrive on making your dream event a reality.</p>
            </div>
                <div className='aimg'>
                    <img id='img-abt' src="https://images.pexels.com/photos/5911454/pexels-photo-5911454.jpeg?auto=compress&cs=tinysrgb&w=800" alt="" />
                </div>
            </div>
            <Pricing/>
            <div className='abt-container'>
                <img id='a-img' src="https://static.wixstatic.com/media/11062b_6471dd55fbd445939f4cb811bd9eaa14~mv2.jpeg/v1/fill/w_2620,h_880,fp_0.50_0.50,q_90,usm_0.66_1.00_0.01,enc_auto/11062b_6471dd55fbd445939f4cb811bd9eaa14~mv2.jpeg" alt="" />
                <div className='a-text'>
                <h1>WORKING HOURS</h1>
                <p><i>Contact us Today</i></p>
                <p>M-F: 8am-8pm</p>
                </div>
            </div>
            <Footer/>
        </div>
     );
}

export default About;