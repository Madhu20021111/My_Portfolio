import React from 'react';
import './Hero.css';
import heroImage from '../images/niro.png'; 

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-background">
        <div className="floating-shapes shape-1"></div>
        <div className="floating-shapes shape-2"></div>
        <div className="floating-shapes shape-3"></div>
      </div>
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h1>Hello, I'm <span className="highlight">Nirosha Madhumali</span></h1>
            <p className="hero-me">Passionate about <span className='me'> Frontend Web Development</span></p>
            <p className="hero-subtitle">Undergraduate at Faculty of Computing</p>    
            <p className="hero-institution"> Sabaragamuwa University of Sri Lanka</p>
            <div className="hero-buttons">
              <a href="#projects" className="btn btn-primary">
                <span>View My Work</span>
                <i className="fas fa-arrow-right"></i>
              </a>
              <a href="#contact" className="btn btn-primary">
                <span>Contact Me</span>
                <i className="fas fa-envelope"></i>
              </a>
            </div>
          </div>
          <div className="hero-image">
            <div className="image-container">
              <img src={heroImage} alt="Nirosha Madhumali" className="profile-image" />
              <div className="image-border"></div>
              <div className="image-dots dots-1"></div>
              <div className="image-dots dots-2"></div>
            </div>
          </div>
        </div>
        {/* <div className="scroll-indicator">
          <span>Scroll Down</span>
          <div className="scroll-arrow"></div>
        </div> */}
      </div>
    </section>
  );
};

export default Hero;