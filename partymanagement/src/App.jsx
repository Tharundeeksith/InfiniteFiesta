import React, { useState } from 'react';
import About from './pages/About';
// import NavBar from './components/NavBar';
import Home from './pages/Home';
import Work from './pages/Work';
import ContactSection from './pages/ContactSection';
import Services from './pages/Services';
import SignUp from './pages/Signup';
import Dashboard from './admin/dashBoard';
import { Provider } from 'react-redux';

import Login from './pages/Login';
import {store} from './components/Redux/reducer/store'
import Venues from './components/venues/Venues';
import User from './pages/User';
import {userContext} from './components/context/Context'
import { BrowserRouter } from 'react-router-dom';
import { Route, Routes } from 'react-router';
import AddLocationAlt from '@mui/icons-material/AddLocationAlt';
import VenueAddForm from './pages/VenueAddForm';
import Party from './admin/Party';

function App() {
  const [log,setLog]=useState(false);
  return ( 
    <div>
      <Provider store={store}>
      <userContext.Provider value={[log,setLog]}>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About />} />
        <Route path="/work" element={<Work />} />
        <Route path="/contact" element={<ContactSection />} />
        <Route path="/services" element={<Services />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/dashboard" element={<Dashboard/>} />
        <Route path="/venues" element={<Venues/>} />
        <Route path="/user" element={<User/>} />
        <Route path="/venueaddform" element={<VenueAddForm/>} />
        <Route path="/partyaddform" element={<Party/>} />
        
      </Routes>
    </BrowserRouter>
      </userContext.Provider>
    </Provider>
    </div>
   );
}

export default App;