import React from 'react';
import { FaTrophy, FaGithub, FaAward, FaUsers, FaCertificate } from 'react-icons/fa';
import './Achievements.css';

const Achievements = () => {
  const certifications = [
    { title: "GitHub Actions", org: "GitHub Skills", icon: <FaGithub />, image: null },
    { title: "API Learning 101", org: "GitHub Skills", icon: <FaGithub />, image: null },
    { title: "React Development", org: "Online", icon: <FaCertificate />, image: null },
    { title: "GitHub for Beginners", org: "GitHub Skills", icon: <FaGithub />, image: null },
    // Add more here to see the scroll effect
  ];

  const otherAchievements = [
    {
      title: "PearHack 3.0 - Top 5",
      org: "Hackathon",
      desc: "Top 5 team for AR/VR solution for urban women.",
      icon: <FaTrophy />
    },
    {
      title: "Vice Secretary",
      org: "Buddhist Association, SUSL",
      desc: "Elected executive role managing administrative operations for 2025/26.",
      icon: <FaUsers />
    },
    {
      title: "Content Writing Leader",
      org: "Buddhist Association, SUSL",
      desc: "Awarded for leading the content team and Sinhala typing contributions.",
      icon: <FaAward />
    }
  ];

  return (
    <section id="achievements" className="achievements">
      <div className="container">
        {/* Section 1: Certifications (Horizontal Flow) */}
        <div className="section-header">
          <h2 className="section-title">Certifications</h2>
          {/* <div className="underline"></div> */}
        </div>
        
        <div className="cert-flow-container">
          <div className="cert-track">
            {certifications.map((cert, index) => (
              <div key={index} className="cert-flow-card">
                <div className="cert-flow-icon">{cert.icon}</div>
                <h4>{cert.title}</h4>
                <span>{cert.org}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Section 2: Other Achievements (Grid) */}
        <div className="section-header" style={{ marginTop: '80px' }}>
          <h2 className="section-title">Leadership & Awards</h2>
          {/* <div className="underline"></div> */}
        </div>

        <div className="achievements-grid">
          {otherAchievements.map((item, index) => (
            <div key={index} className="achievement-card">
              <div className="achievement-icon">{item.icon}</div>
              <h3>{item.title}</h3>
              <span className="achievement-org">{item.org}</span>
              <p className="achievement-desc">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;