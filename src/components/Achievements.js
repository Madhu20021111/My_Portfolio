import React, { useState, useEffect, useCallback } from 'react';
import { 
  FaGithub, 
  FaCertificate, 
  FaTrophy, 
  FaAward, 
  FaUsers, 
  FaPenNib, 
  FaCheckCircle, 
  FaTimes, 
  FaChevronLeft, 
  FaChevronRight, 
  FaExternalLinkAlt,
  FaCode
} from 'react-icons/fa';
import './Achievements.css';

// Import certificate images
import beginner from '../images/beginner.png';
import apilearning from '../images/apilearning.png';
import actions from '../images/actions.png';
import mcpserver from '../images/mcpserver.png';
import aurelia from '../images/Aurelia.png';
import aithon from '../images/Aithon.png';
import ballerina from '../images/Ballerina.png';
import hackelite from '../images/Hackelite 2.0.png';
import webdesign from '../images/webdesign.png';
import Python from '../images/python.png';
import devops from '../images/devops.png';
import PearHack from '../images/pearhack.png';

const Achievements = () => {
  const certifications = [
    { 
      id: 1,
      title: "PearlHack V3.0", 
      org: "Sabaragamuwa University of Sri Lanka", 
      categoryLabel: "Hackathon",
      skills: ["AR/VR Solution", "Product Design", "Top 5 Finalist"],
      icon: <FaTrophy />, 
      image: PearHack,
      type: "Competition Finalist"
    },
    { 
      id: 2,
      title: "Aurelia 2.0", 
      org: "WIE, IEEE Student Branch", 
      categoryLabel: "IEEE Event",
      skills: ["UI/UX Design", "Ideation", "Problem Solving"],
      icon: <FaCertificate />, 
      image: aurelia,
      type: "IEEE Competition"
    },
    { 
      id: 3,
      title: "AIthon", 
      org: "Hemas Holdings", 
      categoryLabel: "AI Ideathon",
      skills: ["Artificial Intelligence", "Innovation", "Ideathon"],
      icon: <FaCertificate />, 
      image: aithon,
      type: "Innovation Challenge"
    },
    { 
      id: 4,
      title: "Ballerina", 
      org: "IEEE Computer Society, UOM", 
      categoryLabel: "Cloud Native",
      skills: ["Ballerina Language", "Cloud Integration", "RESTful APIs"],
      icon: <FaCode />, 
      image: ballerina,
      type: "Language Specialization"
    },
    { 
      id: 5,
      title: "Hackelite 2.0", 
      org: "IEEE Student Branch, UOM", 
      categoryLabel: "Coding Competition",
      skills: ["Competitive Coding", "Algorithms", "Team Problem Solving"],
      icon: <FaTrophy />, 
      image: hackelite,
      type: "IEEE Hackathon"
    },
    { 
      id: 6,
      title: "Web Design for Beginners", 
      org: "University of Moratuwa", 
      categoryLabel: "Web Dev",
      skills: ["HTML5", "CSS3", "Responsive Design", "UI Fundamentals"],
      icon: <FaCertificate />, 
      image: webdesign,
      type: "University Certification"
    },
    { 
      id: 7,
      title: "Python for Beginners", 
      org: "University of Moratuwa", 
      categoryLabel: "Python",
      skills: ["Python 3", "Data Structures", "Algorithms", "Automation"],
      icon: <FaCertificate />, 
      image: Python,
      type: "University Certification"
    },
    { 
      id: 8,
      title: "DevOps 101", 
      org: "Simplilearn", 
      categoryLabel: "DevOps",
      skills: ["CI/CD Pipelines", "DevOps Lifecycle", "Infrastructure", "Automation"],
      icon: <FaCertificate />, 
      image: devops,
      type: "Professional Course"
    },
    { 
      id: 9,
      title: "GitHub Actions", 
      org: "GitHub Skills", 
      categoryLabel: "CI/CD",
      skills: ["GitHub Actions", "Automated Workflows", "Testing & Deployment"],
      icon: <FaGithub />, 
      image: actions,
      type: "GitHub Verified"
    },
    { 
      id: 10,
      title: "GitHub for Beginners", 
      org: "GitHub Skills", 
      categoryLabel: "Version Control",
      skills: ["Git Fundamentals", "Collaboration", "Branches & PRs"],
      icon: <FaGithub />, 
      image: beginner,
      type: "GitHub Verified"
    },
    { 
      id: 11,
      title: "API Learning 101", 
      org: "GitHub Skills", 
      categoryLabel: "APIs & Web Services",
      skills: ["RESTful APIs", "JSON", "Client-Server Architecture"],
      icon: <FaGithub />, 
      image: apilearning,
      type: "GitHub Verified"
    },
    { 
      id: 12,
      title: "MCP Server", 
      org: "GitHub Skills", 
      categoryLabel: "AI Protocols",
      skills: ["Model Context Protocol", "AI Tooling", "System Integration"],
      icon: <FaGithub />, 
      image: mcpserver,
      type: "GitHub Verified"
    }
  ];

  const otherAchievements = [
    {
      title: "PearlHack 3.0 - Top 5 Finalist",
      org: "Hackathon Achievement",
      tag: "Finalist",
      desc: "Ranked among the top 5 teams for designing an innovative AR/VR mobile solution aimed at improving the lifestyle of urban women.",
      icon: <FaTrophy />
    },
    {
      title: "Vice Secretary",
      org: "Buddhist Association - SUSL",
      tag: "Leadership",
      desc: "Appointed to manage administrative operations, team coordination, and executive communication for the 2026/2027 term.",
      icon: <FaUsers />
    },
    {
      title: "Content Writing Team Leader",
      org: "Buddhist Association - SUSL",
      tag: "Editorial Lead",
      desc: "Awarded a Certificate of Appreciation for leading the content team and managing technical writing for the 2025/2026 term.",
      icon: <FaAward />
    }
  ];

  const [selectedCertIndex, setSelectedCertIndex] = useState(null);

  const selectedCert = selectedCertIndex !== null ? certifications[selectedCertIndex] : null;

  const handleOpenModal = (cert) => {
    const idx = certifications.findIndex(c => c.id === cert.id);
    setSelectedCertIndex(idx !== -1 ? idx : 0);
  };

  const handleCloseModal = () => {
    setSelectedCertIndex(null);
  };

  const handlePrevCert = useCallback((e) => {
    if (e) e.stopPropagation();
    if (selectedCertIndex === null || certifications.length === 0) return;
    setSelectedCertIndex((prev) => (prev === 0 ? certifications.length - 1 : prev - 1));
  }, [selectedCertIndex, certifications.length]);

  const handleNextCert = useCallback((e) => {
    if (e) e.stopPropagation();
    if (selectedCertIndex === null || certifications.length === 0) return;
    setSelectedCertIndex((prev) => (prev === certifications.length - 1 ? 0 : prev + 1));
  }, [selectedCertIndex, certifications.length]);

  // Keyboard navigation for modal
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (selectedCertIndex === null) return;
      if (e.key === "Escape") handleCloseModal();
      if (e.key === "ArrowLeft") handlePrevCert();
      if (e.key === "ArrowRight") handleNextCert();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedCertIndex, handlePrevCert, handleNextCert]);

  return (
    <section id="achievements" className="achievements">
      {/* Luminous Glow Background Effects */}
      <div className="achievements-ambient-glow glow-top-left"></div>
      <div className="achievements-ambient-glow glow-bottom-right"></div>

      <div className="container">
        {/* Section Header */}
        <div className="achievements-header-wrapper">
          {/* <div className="achievements-badge"> */}
            {/* <FaShieldAlt className="badge-icon" /> */}
            {/* <span>Credentials & Accreditations</span> */}
          {/* </div> */}
          <h2 className="section-title">Certifications & Milestones</h2>
          <p className="achievements-subtitle">
            Continuous learning journey validating expertise in DevOps, Cloud, AI Protocols, and Competitive Problem Solving.
          </p>

          {/* Quick Stats Ribbon */}
          <div className="cert-stats-ribbon">
            <div className="cert-stat-item">
              <span className="stat-number">{certifications.length}+</span>
              <span className="stat-label">Verified Certifications</span>
            </div>
            <div className="stat-divider"></div>
            <div className="cert-stat-item">
              <span className="stat-number">4+</span>
              <span className="stat-label">Hackathons & Contests</span>
            </div>
            <div className="stat-divider"></div>
            <div className="cert-stat-item">
              <span className="stat-number">3+</span>
              <span className="stat-label">Leadership Roles</span>
            </div>
            <div className="stat-divider"></div>
            <div className="cert-stat-item">
              <span className="stat-number">100%</span>
              <span className="stat-label">Continuous Growth</span>
            </div>
          </div>
        </div>

        {/* Continuous Stream Flow Marquee */}
        <div className="cert-stream-wrapper">
          <div className="cert-flow-container">
            <div className="cert-track">
              {certifications.map((cert) => (
                <div 
                  key={cert.id} 
                  className="cert-flow-card"
                  onClick={() => handleOpenModal(cert)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => e.key === 'Enter' && handleOpenModal(cert)}
                >
                  <div className="cert-card-shine"></div>
                  
                  <div className="cert-top-badge">
                    <span className="cert-type-tag">{cert.categoryLabel}</span>
                    <span className="verified-indicator">
                      <FaCheckCircle className="check-icon" /> Verified
                    </span>
                  </div>

                  <div className="cert-img-box">
                    {cert.image ? (
                      <img src={cert.image} alt={cert.title} loading="lazy" />
                    ) : (
                      <div className="cert-placeholder">{cert.icon}</div>
                    )}
                    <div className="cert-img-overlay">
                      <span className="inspect-btn">
                        <FaExternalLinkAlt /> View Credential
                      </span>
                    </div>
                  </div>

                  <div className="cert-info">
                    <h4>{cert.title}</h4>
                    <span className="cert-org-text">{cert.org}</span>
                    <div className="cert-skills-chips">
                      {cert.skills.slice(0, 2).map((sk, sIdx) => (
                        <span key={sIdx} className="mini-skill-chip">{sk}</span>
                      ))}
                      {cert.skills.length > 2 && (
                        <span className="mini-skill-chip more-chip">+{cert.skills.length - 2}</span>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Duplicate track for seamless infinite scroll */}
            <div className="cert-track" aria-hidden="true">
              {certifications.map((cert) => (
                <div 
                  key={`dup-${cert.id}`} 
                  className="cert-flow-card"
                  onClick={() => handleOpenModal(cert)}
                >
                  <div className="cert-card-shine"></div>
                  
                  <div className="cert-top-badge">
                    <span className="cert-type-tag">{cert.categoryLabel}</span>
                    <span className="verified-indicator">
                      <FaCheckCircle className="check-icon" /> Verified
                    </span>
                  </div>

                  <div className="cert-img-box">
                    {cert.image ? (
                      <img src={cert.image} alt={cert.title} loading="lazy" />
                    ) : (
                      <div className="cert-placeholder">{cert.icon}</div>
                    )}
                    <div className="cert-img-overlay">
                      <span className="inspect-btn">
                        <FaExternalLinkAlt /> View Credential
                      </span>
                    </div>
                  </div>

                  <div className="cert-info">
                    <h4>{cert.title}</h4>
                    <span className="cert-org-text">{cert.org}</span>
                    <div className="cert-skills-chips">
                      {cert.skills.slice(0, 2).map((sk, sIdx) => (
                        <span key={sIdx} className="mini-skill-chip">{sk}</span>
                      ))}
                      {cert.skills.length > 2 && (
                        <span className="mini-skill-chip more-chip">+{cert.skills.length - 2}</span>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="stream-hint">
            <span>✦ Hover to pause • Click card to view full certificate & skills</span>
          </div>
        </div>

        {/* Section 2: Leadership & Experiences */}
        <div className="leadership-section-divider">
          {/* <div className="achievements-badge"> */}
            {/* <FaAward className="badge-icon" /> */}
            {/* <span>Impact & Governance</span> */}
          {/* </div> */}
          <h2 className="section-title">Leadership & Experiences</h2>
          <p className="achievements-subtitle">
            Demonstrated team management, organizational leadership, and editorial contribution.
          </p>
        </div>

        <div className="achievements-grid">
          {otherAchievements.map((item, index) => (
            <div key={index} className="achievement-card">
              <div className="achievement-card-accent"></div>
              <div className="achievement-top-row">
                <div className="achievement-icon">{item.icon}</div>
                <span className="achievement-status-tag">{item.tag}</span>
              </div>
              <h3>{item.title}</h3>
              <span className="achievement-org">{item.org}</span>
              <p className="achievement-desc">{item.desc}</p>
            </div>
          ))}
          
          <div className="achievement-card creative-writer-card">
            <div className="achievement-card-accent"></div>
            <div className="achievement-top-row">
              <div className="achievement-icon"><FaPenNib /></div> 
              <span className="achievement-status-tag active-role-tag">Active</span>
            </div>
            <h3>Creative Writer</h3>
            <span className="achievement-org">Neovise</span>
            <p className="achievement-desc">
              Developing compelling digital content and creative narratives while ensuring high-quality engagement for diverse audiences.
            </p>

            <a 
              href="https://neovise.me/author/nirosha-madhumali/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="results-tag-link"
            >
              <div className="results-tag">
                <span>View Author Profile</span>
                <FaExternalLinkAlt className="external-link-icon" />
              </div>
            </a>
          </div>
        </div>
      </div>

      {/* Interactive Certificate Lightbox Modal */}
      {selectedCert && (
        <div className="cert-modal-backdrop" onClick={handleCloseModal}>
          <div 
            className="cert-modal-dialog" 
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-labelledby="cert-modal-title"
          >
            {/* Close Button */}
            <button className="cert-modal-close-btn" onClick={handleCloseModal} aria-label="Close modal">
              <FaTimes />
            </button>

            {/* Modal Content */}
            <div className="cert-modal-body">
              {/* Left Column: Certificate Image Preview */}
              <div className="cert-modal-image-col">
                <div className="cert-modal-img-frame">
                  {selectedCert.image ? (
                    <img src={selectedCert.image} alt={selectedCert.title} />
                  ) : (
                    <div className="modal-cert-fallback-icon">{selectedCert.icon}</div>
                  )}
                </div>
              </div>

              {/* Right Column: Certificate Information & Skills */}
              <div className="cert-modal-info-col">
                <div className="modal-header-meta">
                  <span className="modal-cert-badge">{selectedCert.categoryLabel}</span>
                  <span className="modal-verified-pill">
                    <FaCheckCircle /> Verified Credential
                  </span>
                </div>

                <h3 id="cert-modal-title" className="modal-cert-title">{selectedCert.title}</h3>
                <div className="modal-cert-org-row">
                  <span className="modal-org-label">Issuing Organization:</span>
                  <span className="modal-org-name">{selectedCert.org}</span>
                </div>

                <div className="modal-cert-type-row">
                  <span className="modal-org-label">Credential Type:</span>
                  <span className="modal-type-name">{selectedCert.type}</span>
                </div>

                <div className="modal-skills-section">
                  <span className="modal-skills-title">Skills & Proficiencies Demonstrated:</span>
                  <div className="modal-skills-grid">
                    {selectedCert.skills.map((skill, idx) => (
                      <span key={idx} className="modal-skill-item">
                        <FaCheckCircle className="modal-skill-check" />
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Modal Navigation Buttons */}
                <div className="modal-nav-controls">
                  <button className="modal-nav-btn prev-btn" onClick={handlePrevCert}>
                    <FaChevronLeft /> Previous
                  </button>
                  <span className="modal-counter">
                    {(selectedCertIndex ?? 0) + 1} of {certifications.length}
                  </span>
                  <button className="modal-nav-btn next-btn" onClick={handleNextCert}>
                    Next <FaChevronRight />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Achievements;