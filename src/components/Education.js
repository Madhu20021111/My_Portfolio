// components/Education.js
import React from 'react';
import './Education.css';

// Import your avatar image
import educationAvatar from '../images/avataaar.png';

const Education = () => {
  return (
    <section id="education" className="education">
      <div className="education-background">
        <div className="floating-shapes shape-1"></div>
        <div className="floating-shapes shape-2"></div>
        <div className="floating-shapes shape-3"></div>
      </div>
      <div className="container">
        <h2 className="section-title">My Education</h2>
        
        <div className="education-content">
          <div className="education-avatar" data-aos="zoom-in">
            <img src={educationAvatar} alt="Education Avatar" className="avatar-image" />
            <div className="avatar-decoration">
              <div className="decoration-circle circle-1"></div>
              <div className="decoration-circle circle-2"></div>
              <div className="decoration-circle circle-3"></div>
            </div>
          </div>
          
          <div className="education-items">
            <div className="education-item" data-aos="fade-left" data-aos-delay="100">
              <div className="education-timeline">
                <div className="timeline-dot"></div>
                <div className="timeline-line"></div>
              </div>
              <div className="education-card">
                <div className="education-icon">
                  <i className="fas fa-graduation-cap"></i>
                </div>
                <div className="education-details">
                  <h3>Sri Lanka Sabaragamuwa University</h3>
                  <p className="degree">Bachelor of Science in Computing</p>
                  <p className="duration">
                    <i className="fas fa-calendar-alt"></i>
                    2024 - Present
                  </p>
                  <div className="description">
                    <p>
                      Currently pursuing my undergraduate degree in the Faculty of Computing. 
                      The program covers various aspects of computer science including:
                    </p>
                    <ul className="course-list">
                      <li><i className="fas fa-code"></i> Software Engineering</li>
                      <li><i className="fas fa-laptop-code"></i> Web Development</li>
                      <li><i className="fas fa-database"></i> Database Management</li>
                      <li><i className="fas fa-shield-alt"></i> Network Security</li>
                      <li><i className="fas fa-brain"></i> Artificial Intelligence</li>
                      <li><i className="fas fa-mobile-alt"></i> Mobile Application Development</li>
                    </ul>
                  </div>
                  <div className="education-progress">
                    <div className="progress-text">Degree Progress</div>
                    <div className="progress-bar">
                      <div className="progress-fill" style={{width: '75%'}}>
                        <span className="progress-percentage">75%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Add more education items as needed */}
            <div className="education-item" data-aos="fade-left" data-aos-delay="200">
              <div className="education-timeline">
                <div className="timeline-dot"></div>
                <div className="timeline-line"></div>
              </div>
              <div className="education-card">
                <div className="education-icon">
                  <i className="fas fa-certificate"></i>
                </div>
                <div className="education-details">
                  <h3>Online Courses & Certifications</h3>
                  <p className="degree">Various Programming & Development Courses</p>
                  <p className="duration">
                    <i className="fas fa-calendar-alt"></i>
                    2024 - Present
                  </p>
                  <div className="description">
                    <p>
                      Continuously expanding my knowledge through online platforms:
                    </p>
                    <ul className="course-list">
                      <li><i className="fab fa-react"></i> React.js Development</li>
                      <li><i className="fab fa-node-js"></i> Node.js & Express</li>
                      <li><i className="fas fa-cloud"></i> Cloud Computing</li>
                      <li><i className="fas fa-server"></i> Backend Development</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
