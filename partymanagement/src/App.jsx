import React from 'react';
import About from './pages/About';
// import NavBar from './components/NavBar';
import Home from './pages/Home';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Work from './pages/Work';
import ContactSection from './pages/ContactSection';
import Services from './pages/Services';
import Login from './pages/Login';
import SignUp from './pages/Signup';
function App() {
  return ( 
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About />} />
        <Route path="/work" element={<Work />} />
        <Route path="/contact" element={<ContactSection />} />
        <Route path="/services" element={<Services />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        
      </Routes>
    </BrowserRouter>
    </div>
   );
}

export default App;