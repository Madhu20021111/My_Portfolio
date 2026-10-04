// App.js (main component)
import React from 'react';
import './App.css';
import ConstellationBackground from './components/ConstellationBackground';
import CustomCursor from './components/CustomCursor';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Achievements from './components/Achievements';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <CustomCursor />
      <ConstellationBackground />
      <Header />
      <Hero />
      <About />
      <Education />
      <Achievements />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;