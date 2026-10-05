// components/Header.js
import React, { useState } from 'react';
import { FaUser, FaGraduationCap, FaCode, FaProjectDiagram, FaEnvelope, FaTrophy } from 'react-icons/fa';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <span>Nirosha Madhumali</span>
        </div>
        <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
          <ul>
            <li>
              <a href="#about" onClick={closeMenu}><FaUser className="nav-icon" /> About</a>
            </li>
            <li>
              <a href="#education" onClick={closeMenu}><FaGraduationCap className="nav-icon" /> Education</a>
            </li>
            <li>
              <a href="#skills" onClick={closeMenu}><FaCode className="nav-icon" /> Skills</a>
            </li>
            <li>
              <a href="#achievements" onClick={closeMenu}><FaTrophy className="nav-icon" /> Achievements</a>
            </li>
            <li>
              <a href="#projects" onClick={closeMenu}><FaProjectDiagram className="nav-icon" /> Projects</a>
            </li>
            <li>
              <a href="#contact" onClick={closeMenu}><FaEnvelope className="nav-icon" /> Contact</a>
            </li>
          </ul>
        </nav>
        <button 
          className={`menu-toggle ${isMenuOpen ? 'active' : ''}`} 
          onClick={toggleMenu}
          aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isMenuOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  );
};

export default Header;
