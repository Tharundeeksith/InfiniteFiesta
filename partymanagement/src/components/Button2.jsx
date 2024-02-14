import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router';
import "./Button2.css";

export default function Button2() {

    const navigate=useNavigate();
  return (
    <Box sx={{ '& button': { m: 1 ,backgroundColor:'white',color:'black'} }}>
      {/* <div>
        <Button size="small">Small</Button>
        <Button size="medium">Medium</Button>
        <Button size="large">Large</Button>
      </div> */}
      <div>
        
        <Button className='btn-mui' variant="outlined" size="medium" onClick={()=>{
            navigate("/venues")
        }}>
          Book Now
        </Button>
       
      </div>
      {/* <div>
        <Button variant="contained" size="small">
          Small
        </Button>
        <Button variant="contained" size="medium">
          Medium
        </Button>
        <Button variant="contained" size="large">
          Large
        </Button>
      </div> */}
    </Box>
  );
}
