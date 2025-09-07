// components/About.js
import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2>About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <p>
              I am an enthusiastic undergraduate student at the Faculty of Computing, 
              Sri Lanka Sabaragamuwa University. I'm passionate about web development, 
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
            <div className="image-placeholder">
              <span>About Image</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;