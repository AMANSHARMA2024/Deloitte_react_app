import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Gallery from './components/Gallery';
// import Contactform from './components/Contactform';




function App() {
  return (
    <Router>
    
    <div>
      <Navbar/>
      <Routes>
      <Route path="/gallery" element={<Gallery/>} />
      {/* <Route path="/contact" element={<Contactform/>} /> */}
      </Routes>
      <Footer/>

      
    </div>
    </Router>
    
  )
}

export default App
