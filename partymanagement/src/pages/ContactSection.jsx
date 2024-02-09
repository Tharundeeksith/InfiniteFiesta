import React from 'react';
import Footer from '../components/Footer';
import NavBar from '../components/NavBar';
import "./ContactSection.css"

const ContactSection = () => {
  return (
    <div>
      <NavBar/>
      <div className="container">
      <div style={{ textAlign: 'center' }}>
        <h2>Contact Us</h2>
        <p>Swing by for a cup of coffee, or leave us a message:</p>
      </div>
      <div className="row">
        <div className="column">
          {/* <img src="https://images.pexels.com/photos/8158771/pexels-photo-8158771.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Map" style={{ width: '100%' }} /> */}
        </div>
        <div className="column">
          <form action="/action_page.php">
            <label htmlFor="fname">First Name</label>
            <input type="text" id="fname" name="firstname" placeholder="Your name.." />
            <label htmlFor="lname">Last Name</label>
            <input type="text" id="lname" name="lastname" placeholder="Your last name.." />
            <label htmlFor="lname">Mobile-No</label>
            <input type="tel" id="tel1" name="lastname" placeholder="Your Phone Number.." />
            {/* <label htmlFor="country">Event Type</label>
            <select id="country" name="country">
              <option value="australia">Marriage Event</option>
              <option value="canada">Birthday Party Event</option>
              <option value="usa">Corporate event</option>
            </select>
            <label for="eventdate">Event Date</label>
            <input type="date" id="date1" name="eventdate"></input> */}
            <label htmlFor="subject">Subject</label>
            <textarea id="subject" name="subject" placeholder="Write something.." style={{ height: '170px' }}></textarea>
            <input type="submit" value="Submit" />
          </form>
        </div>
      </div>
    </div>
    {/* <img id="map"src="https://i.stack.imgur.com/HILmr.png" alt="" /> */}
    <div class="map-div"> 
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2005651.6484603612!2d74.48919195624998!3d10.941575400000005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba85b8dc0443c9d%3A0xde8004de80b45cc5!2sL%C3%A9%20Infinity!5e0!3m2!1sen!2sin!4v1706551666572!5m2!1sen!2sin" 
    // style="border:0;" 
    allowfullscreen="" 
    loading="lazy" 
    referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div> 
    <Footer/>
    </div>
  );
};

export default ContactSection;
