// components/Footer.js
import React from "react";
import { FaLinkedin, FaGithub, FaFacebook, FaMedium } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-overlay"></div>
      <div className="container">
        <div className="footer-content">
          <div className="footer-text">
            <p>&copy; {new Date().getFullYear()} Nirosha Madhumali. All Rights Reserved.</p>
          </div>
          <div className="social-links">
            <a href="www.linkedin.com/in/nirosha-madhumali-a2325b333" aria-label="LinkedIn">
              <FaLinkedin className="footer-icon" />
            </a>
            <a href="https://github.com/Madhu20021111" aria-label="GitHub">
              <FaGithub className="footer-icon" />
            </a>
            <a href="https://medium.com/@niroshamadumali37" aria-label="Medium">
              <FaMedium className="footer-icon" />
            </a>
            <a href="https://www.facebook.com/nirosha.madumali.7547" aria-label="Facebook">
              <FaFacebook className="footer-icon" />
            </a>
          </div>
        </div>
        
      </div>
    </footer>
  );
};

export default Footer;
