import React from 'react';
import { FaTrophy, FaGithub, FaAward } from 'react-icons/fa';
import './Achievements.css';

const Achievements = () => {
  const achievements = [
    {
      title: "Content Writing Leader",
      org: "Buddhist Association, SUSL",
      desc: "Honored with a Certificate of Appreciation as Team Leader for the 2025/26 term.",
      icon: <FaAward />
    },
    {
      title: "GitHub Learning Badges",
      org: "GitHub Skills",
      desc: "Earned badges for GitHub Actions, API Learning 101, and GitHub for Beginners.",
      icon: <FaGithub />
    },
    {
      title: "Hackathon Participation",
      org: "Healthcare Category",
      desc: "Developed a multilingual medical info platform for a hackathon competition.",
      icon: <FaTrophy />
    }
  ];

  return (
    <section id="achievements" className="achievements">
      <div className="container">
        <div style={{ position: 'relative', textAlign: 'center', marginBottom: '60px' }}>
          <h2 className="section-title">Achievements</h2>
          <div className="underline" style={{ margin: '10px auto' }}></div>
        </div>

        <div className="achievements-grid">
          {achievements.map((item, index) => (
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