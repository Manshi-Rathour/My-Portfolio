import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
// import Projects from './pages/Projects';
// import Experience from './pages/Experience';
// import Education from './pages/Education';
// import Contact from './pages/Contact Me';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/about" element={<Projects />} />
        <Route path="/services" element={<Experience />} />
        <Route path="/contact" element={<Education />} />
        <Route path="/career" element={<Contact />} /> */}
      </Routes>
      <Footer />
    </>
  );
}

export default App;
