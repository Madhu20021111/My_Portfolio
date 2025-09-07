// components/Education.js
import React from 'react';
import './Education.css';

const Education = () => {
  return (
    <section id="education" className="education">
      <div className="container">
        <h2>Education</h2>
        <div className="education-item">
          <div className="education-icon">
            <i className="fas fa-graduation-cap"></i>
          </div>
          <div className="education-details">
            <h3>Sri Lanka Sabaragamuwa University</h3>
            <p className="degree">Bachelor of Science in Computing</p>
            <p className="duration">2021 - Present</p>
            <p className="description">
              Currently pursuing my undergraduate degree in the Faculty of Computing. 
              The program covers various aspects of computer science including software 
              engineering, web development, database management, and network security.
            </p>
          </div>
        </div>
        {/* Add more education items as needed */}
      </div>
    </section>
  );
};

export default Education;