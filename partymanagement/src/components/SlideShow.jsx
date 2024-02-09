import React, { useState } from "react";
import SimpleImageSlider from 'react-simple-image-slider';
import "./SlideShow.css";




function SlideShow() {
   const [imageNum, setImageNum] = useState(1);
  const sliderImages = [
    {
     url:"https://images.pexels.com/photos/7945026/pexels-photo-7945026.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
       url:"https://images.pexels.com/photos/6479595/pexels-photo-6479595.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
       url:"https://images.pexels.com/photos/3810756/pexels-photo-3810756.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
        url:"https://images.pexels.com/photos/461431/pexels-photo-461431.jpeg?auto=compress&cs=tinysrgb&w=800",
     },
   
 ];
    return ( 
        
        <div>
            <SimpleImageSlider
            width={1000}
            height={400}
            images={sliderImages}
            showBullets={true}
            // showNavs={true}
            autoPlay={true} 
            onStartSlide = {(index, length) => {
               setImageNum(index);
            }}
               autoPlayDelay = {1.5}
         />
        </div>
     );
}

export default SlideShow;

