import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Fade from '@mui/material/Fade';
import { userContext } from './context/Context';
import { useNavigate } from 'react-router';

export default function Menu1() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [log,setLog]=React.useContext(userContext);
  const open = Boolean(anchorEl);
  const navigate=useNavigate();
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleLogout = () => {
    // setAnchorEl(null);
    // console.log("ehllo");
    window.location.reload();
    // localStorage.clear();
  };

  return (
    <div>
      <Button className='user-namebutton'
        id="fade-button"
        aria-controls={open ? 'fade-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        sx={{ top:'-6px',color:'red' }}
      >
        {log?<p id='user-name'>Hii,{localStorage.getItem("name").split("@")[0]}</p>:Login}
      </Button>
      <Menu
        id="fade-menu"
        MenuListProps={{
          'aria-labelledby': 'fade-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
      >
        <MenuItem onClick={""}>Profile</MenuItem>
        {/* <MenuItem onClick={()=>{navigate("/dashboard")}}>Dashboard</MenuItem> */}
        <MenuItem onClick={handleLogout}>Logout</MenuItem>
      </Menu>
    </div>
  );
}
