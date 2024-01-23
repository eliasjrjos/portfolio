import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Home from './pages/homepage/Home';
import About from './pages/about/About';
import Projects from './pages/projects/Projects';
import Education from './pages/education/Education';
import Contact from './pages/contact/Contact';
import Skills from './pages/skills/Skills';
import FooterSection from './components/footer-section/FooterSection';
import NavBar from './components/navbar/NavBar';

import { GlobalStyle } from './globals/global.styles';
import './index.css';

function App() {

  return (
    <div style={{width: "100%", height: "100vh"}}>
      <GlobalStyle />
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/education" element={<Education />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <FooterSection />
    </div>
  );
}

export default App;
