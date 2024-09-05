import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/NavBar/Navbar';
import Home from './pages/Home/Home';
import DigitalMarketing from './pages/servicePage/DigitalMarketing/DigitalMarketing';
import WebDevelopment from './pages/servicePage/webDevelopment/webDevelopment';
import './App.css';
import Footer from './components/Footer/Footer';

function App() {

  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/webDevelopment" element={<WebDevelopment />} />
          <Route path="/digitalMarketing" element={<DigitalMarketing />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;