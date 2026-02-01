import React from 'react';
import './Education.css';
import educationAvatar from '../images/avataaar.png';

const Education = () => {
  const educationData = [
    {
      institution: "Sabaragamuwa University of Sri Lanka",
      degree: "BSc (Hons) in Computing & Information Systems",
      duration: "2024 - Present",
      details: "Currently a second-year undergraduate in the Faculty of Computing, focusing on Software Engineering and UI/UX.",
      highlights: ["GPA: [Insert Your GPA]", "Relevant Modules: DSA, OOP, DBMS, Web Development"]
    },
    {
      institution: "Embilipitiya President's College",
      degree: "G.C.E. Advanced Level (Physical Science Stream)",
      duration: "Completed 2023",
      details: "Successfully completed A/Ls with focus on Combined Mathematics, Physics, and Chemistry.",
      results: "BCC"
    },
    {
      institution: "R/Emb/ Jandura Maha Vidyalaya",
      degree: "G.C.E. Ordinary Level",
      duration: "Completed 2018",
      details: "Completed with high distinction.",
      results: "9A"
    }
  ];

  return (
    <section id="education" className="education">
      <div className="container">
        <div style={{ position: 'relative', display: 'inline-block', left: '50%', transform: 'translateX(-50%)', marginBottom: '60px' }}>
          <h2 className="section-title" style={{ marginBottom: '0' }}>My Education</h2>
        </div>

        <div className="education-content">
          <div className="education-avatar">
            <img src={educationAvatar} alt="Education Avatar" className="avatar-image" />
            <div className="avatar-decoration">
              <div className="decoration-circle circle-1"></div>
            </div>
          </div>

          <div className="education-items">
            {educationData.map((item, index) => (
              <div key={index} className="education-item">
                <div className="education-timeline">
                  <div className="timeline-dot"></div>
                  <div className="timeline-line"></div>
                </div>
                <div className="education-card">
                  <div className="education-details">
                    <h3>{item.institution}</h3>
                    <p className="degree">{item.degree}</p>
                    <p className="duration">{item.duration}</p>
                    <p className="description">{item.details}</p>
                    {item.results && <p className="results-tag">Results: {item.results}</p>}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;