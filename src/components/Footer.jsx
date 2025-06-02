import React from 'react';
import { FaTwitter, FaInstagram, FaYoutube, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="spacex-footer">
      {/* Top Section */}
      <div className="footer-top">
        <div className="footer-logo">
          <span className="logo-text"><a href="#"><img src="./logo.svg" alt="SpaceX" /></a></span>
        </div>
        
        <div className="footer-links">
          <a href="#">Home</a>
          <a href="#shuttle">Shuttle</a>
          <a href="#mars">Mars</a>
          <a href="#moon">Moon</a>
          <a href="#rover">Rover</a>
        </div>
        
        <div className="footer-social">
          <a href="https://twitter.com/SpaceX" aria-label="Twitter"><FaTwitter /></a>
          <a href="https://instagram.com/SpaceX" aria-label="Instagram"><FaInstagram /></a>
          <a href="https://youtube.com/SpaceX" aria-label="YouTube"><FaYoutube /></a>
          <a href="https://linkedin.com/company/SpaceX" aria-label="LinkedIn"><FaLinkedin /></a>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} SPACEX. ALL RIGHTS RESERVED.</p>
        <div className="legal-links">
          <a href="#">PRIVACY POLICY</a>
          <a href="#">TERMS OF USE</a>
          <a href="#">CONTACT</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;