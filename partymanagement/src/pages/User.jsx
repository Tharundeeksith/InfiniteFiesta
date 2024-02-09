import React from 'react'
import { useSelector } from 'react-redux';
import NavBar from '../components/NavBar';
import "./User.css";
function User() {
    const prod=useSelector(state=>state);
    const bookings=prod.allProducts.cartProduct
    // const venue=bookings[0]
    return ( 
        <>
        {/* <div onClick={console.log(bookings)}>hl</div> */}
        <NavBar/>
        <div className='something'>
        
        {bookings.map(venue=>
            
            <div className='venue-user'>
                <img id='img-user' src={venue.link}/>
                <h3 id='s-name'>{venue.name}</h3>
               <p id='s-price'>₹{venue.price}</p> 
               <p id='s-price'>{venue.location}</p> 
               <p id='s-price'>{venue.dur}</p> 
               <p id='s-price'>{venue.statu}</p> 
               {/* <p id='s-price'>{venue.location}</p>  */}
               {/* <p id='s-form'>
                <div>
                Time:<input type="text"  onChange={(e)=>setDurr(e.target.value)}/>
                </div>
                <div>
                Phone Number:<input type="text"  onChange={(e)=>setPhone(e.target.value)}/>
                </div>
                <div>
                
                No of People:<input type="text"  onChange={(e)=>setPeople(e.target.value)}/>
                </div>
            </p>  */}
                </div>
                  
                 )}
        </div>
                </>
    )};

export default User;