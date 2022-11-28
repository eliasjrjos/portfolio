import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Home from './pages/homepage/Home';
import About from './pages/about/About';
import Projects from './pages/projects/Projects';
import Education from './pages/education/Education';
import Contact from './pages/contact/Contact';
import FooterSection from './components/footer-section/FooterSection';
import NavBar from './components/navbar/NavBar';

import { GlobalStyle } from './globals/global.styles';
import './index.css';

function App() {
  return (
    <>
      <GlobalStyle />
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/education" element={<Education />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <FooterSection />
    </>
  );
}

export default App;
