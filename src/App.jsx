import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './component/home/Home';
import About from './component/About/About';
import Client from './component/OurClient/Client';
import Contact from './component/contact/Contact';
import FireHydrant from './component/OurService/FireHydrant/FireHydrant';
import FireAlarm from './component/OurService/FireAlram/FireAlarm';
import FireFightingTraining from './component/OurService/FireFightingTrainings/FireFightingTraining';
import FirstAid from './component/OurService/FirstAidTraining/FirstAid';




function App() {
  return (

      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path ="/about" element={<About/>}/>
        <Route path ="/about" element={<About/>}/>
        <Route path ="/contact" element={<Contact/>}/>
        <Route path ="/our-client" element={<Client/>}/>
        <Route path ="/hydrant-Projects" element={<FireHydrant/>}/>
      <Route path='/alarm-Projects'element ={<FireAlarm/>}/>
      <Route path="/fighting-Training" element={<FireFightingTraining/>}/>
      <Route path ="/fireAid-Traing" element={<FirstAid/>}/>
      </Routes>
      
  
  );
}

export default App;