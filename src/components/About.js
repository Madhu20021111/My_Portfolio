import React from 'react';
import './About.css';
import AboutImage from '../images/about.jpeg'; 

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2>About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <p>
              I am an Tech enthusiastic undergraduate student at the Faculty of Computing, 
              Sabaragamuwa University of Sri Lanka. I'm passionate about Full stack web development, 
              software engineering, and creating innovative solutions to real-world problems.
            </p>
            <p>
              My academic journey has provided me with a strong foundation in computing 
              principles, and I'm constantly expanding my knowledge through practical 
              projects and self-learning.
            </p>
            <p>
              When I'm not coding, I enjoy exploring new technologies, reading tech blogs, 
              and participating in coding communities.
            </p>
          </div>
          <div className="about-image">
            <div className="image-container">
              <div className="image-placeholder">
                <img src={AboutImage} alt="Nirosha Madhumali" className="about-image" />
              </div>
              <div className="floating-element element-1"></div>
              <div className="floating-element element-2"></div>
              <div className="floating-element element-3"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;