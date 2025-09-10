// components/Header.js
import React, { useState } from 'react';
import { FaUser, FaGraduationCap, FaCode, FaProjectDiagram, FaEnvelope } from 'react-icons/fa';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
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
              <a href="#about"><FaUser className="nav-icon" /> About</a>
            </li>
            <li>
              <a href="#education"><FaGraduationCap className="nav-icon" /> Education</a>
            </li>
            <li>
              <a href="#skills"><FaCode className="nav-icon" /> Skills</a>
            </li>
            <li>
              <a href="#projects"><FaProjectDiagram className="nav-icon" /> Projects</a>
            </li>
            <li>
              <a href="#contact"><FaEnvelope className="nav-icon" /> Contact</a>
            </li>
          </ul>
        </nav>
        <button className="menu-toggle" onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  );
};

export default Header;
