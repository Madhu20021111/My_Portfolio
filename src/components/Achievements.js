import React from 'react';
import { FaGithub, FaCertificate, FaTrophy, FaAward, FaUsers } from 'react-icons/fa';
import './Achievements.css';

// Import your certificate images
import beginner from '../images/beginner.png';
import apilearning from '../images/apilearning.png';
import actions from '../images/actions.png';
import mcpserver from '../images/mcpserver.png';
import webdesign from '../images/webdesign.png';
import devops from '../images/devops.png';
import PearHack from '../images/pearhack.png';

const Achievements = () => {
  const certifications = [
    { title: "PearlHack V3.0", org: "Sabaragamuwa University of Sri lanka", icon: <FaCertificate />, image: PearHack },
    { title: "Web design for beginners", org: "University of Moratuwa", icon: <FaCertificate />, image: webdesign },
    { title: "DevOps 101", org: "Simplilearn", icon: <FaCertificate />, image: devops },
    { title: "GitHub Actions", org: "GitHub Skills", icon: <FaGithub />, image: actions },
    { title: "GitHub for beginners", org: "GitHub Skills", icon: <FaGithub />, image: beginner },
    { title: "API Learning 101", org: "GitHub Skills", icon: <FaGithub />, image: apilearning },
    { title: "MCP Server", org: "GitHub Skills", icon: <FaGithub />, image: mcpserver }
  ];

  const otherAchievements = [
    {
      title: "PearHack 3.0 - Top 5 Finalist",
      org: "Hackathon Achievement",
      desc: "Ranked among the top 5 teams for designing an innovative AR/VR mobile solution aimed at improving the lifestyle of urban women.",
      icon: <FaTrophy />
    },
    {
      title: "Vice Secretary",
      org: "Buddhist Association - SUSL",
      desc: "Recently appointed to manage administrative operations and executive coordination for the 2026/2027 term.",
      icon: <FaUsers />
    },
    {
      title: "Content Writing Team Leader",
      org: "Buddhist Association - SUSL",
      desc: "Awarded a Certificate of Appreciation for leading the content team and managing Sinhala technical writing for the 2025/2026 term.",
      icon: <FaAward />
    }
  ];

  return (
    <section id="achievements" className="achievements">
      <div className="container">
        {/* Section 1: Certifications (Horizontal Flow) */}
        <div style={{ position: 'relative', textAlign: 'center', marginBottom: '40px' }}>
          <h2 className="section-title" style={{ marginBottom: '0' }}>Certifications</h2>
          <div className="underline" style={{ margin: '10px auto' }}></div>
        </div>
        
        <div className="cert-flow-container">
          <div className="cert-track">
            {certifications.map((cert, index) => (
              <div key={index} className="cert-flow-card">
                <div className="cert-img-box">
                  {cert.image ? (
                    <img src={cert.image} alt={cert.title} />
                  ) : (
                    <div className="cert-placeholder">{cert.icon}</div>
                  )}
                </div>
                <div className="cert-info">
                  <h4>{cert.title}</h4>
                  <span>{cert.org}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Section 2: Leadership & Awards (Grid) */}
        <div style={{ position: 'relative', textAlign: 'center', margin: '80px 0 40px' }}>
          <h2 className="section-title" style={{ marginBottom: '0' }}>Leadership & Awards</h2>
          <div className="underline" style={{ margin: '10px auto' }}></div>
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