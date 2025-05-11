import './App.css';
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Home from './components/Homep.jsx';
import About from './components/About.jsx';
import Projects from './components/Projects.jsx';
import Skills from './components/Skills.jsx';
import Contact from './components/Contact.jsx';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1200,      // animation duration
    once: false,         // allow repeat on scroll
    mirror: true,        // ✅ animate on scroll up
    offset: 100,         // trigger point from top
    easing: 'ease-in-out', // how early the animation triggers
    });
     AOS.refresh();
  }, []);

  return (
    <>
      <Home />
      <About />
      <Projects />
      <Skills />
      <Contact />
    </>
  );
}

export default App;
