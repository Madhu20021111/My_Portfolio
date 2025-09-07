// components/Hero.js
import React from 'react';
import './Hero.css';
import heroImage from '../images/hero.jpg'; // Replace with your actual image path

const Hero = () => {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-content">
          <h1>Hello, I'm <span>Nirosha Madhumali</span></h1>
          <p>Undergraduate at Faculty of Computing, Sri Lanka Sabaragamuwa University</p>
          <div className="hero-buttons">            
            <a href="#projects" className="btn btn-primary">View My Work</a>
            <a href="#contact" className="btn btn-secondary">Contact Me</a>
          </div>
        </div>
        <div className="hero-image">
          <img src= {heroImage} alt="Nirosha Madhumali" className="profile-image" />
          {/* <div className="image-placeholder">
            <span>Your Photo</span>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Hero;