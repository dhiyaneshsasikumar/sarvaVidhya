import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import DigitalMarketing from './pages/servicePage/DigitalMarketing/DigitalMarketing';
import WebDevelopment from './pages/servicePage/webDevelopment/webDevelopment';
import './App.css';
import Footer from './components/Footer/Footer';
import Nav from './components/Nav/Nav';
import Contact from './pages/ContactUs/Contact';

function App() {

  return (
    <Router>
      <div>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/webDevelopment" element={<WebDevelopment />} />
          <Route path="/digitalMarketing" element={<DigitalMarketing />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;