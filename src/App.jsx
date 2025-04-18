import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './component/home/Home';
import About from './component/About/About';
import Client from './component/OurClient/Client';
import Contact from './component/contact/Contact';




function App() {
  return (

      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path ="/about" element={<About/>}/>
        <Route path ="/about" element={<About/>}/>
        <Route path ="/contact" element={<Contact/>}/>
        <Route path ="/our-client" element={<Client/>}/>
      </Routes>
      
  
  );
}

export default App;