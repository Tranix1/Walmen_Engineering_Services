import React from 'react';
import './Footer.css';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaTiktok } from 'react-icons/fa'; // Make sure you have react-icons installed

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="footer-content-container">
        
        <div className="footer-column footer-about">
          <h3>WALMEM ENGINEERING</h3>
          <p>
            At WALMEM ENGINEERING, we specialize in **power solutions, automation, and electrical engineering** to drive industrial efficiency and sustainability.
          </p>
          <div className="social-links">
            <a href="https://facebook.com" aria-label="Facebook"><FaFacebookF /></a>
            <a href="https://twitter.com" aria-label="Twitter"><FaTwitter /></a>
            <a href="https://instagram.com" aria-label="Instagram"><FaInstagram /></a>
            <a href="https://linkedin.com" aria-label="LinkedIn"><FaLinkedinIn /></a>
            <a href="https://tiktok.com" aria-label="TikTok"><FaTiktok /></a>
          </div>
        </div>

        <div className="footer-column footer-links">
          <h3>Useful Links</h3>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About Us</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#contact">Contact</a></li>
            <li><a href="/privacy-policy">Privacy Policy</a></li>
          </ul>
        </div>

        <div className="footer-column footer-services">
          <h3>Our Services</h3>
          <ul>
            <li><a href="#solar-systems">Solar Systems</a></li>
            <li><a href="#power-systems">Power Systems</a></li>
            <li><a href="#plant-automation">Plant Automation</a></li>
            <li><a href="#control-panel">Control Panel Manufacturing</a></li>
            <li><a href="#maintenance">HV & LV Maintenance</a></li>
          </ul>
        </div>

        <div className="footer-column footer-contact">
          <h3>Contact Us</h3>
          <p>13A, Simon Mazorodze, Waterfalls,<br />Harare, Zimbabwe</p>
          <p>Phone: **(+263) 715 245 925**</p>
          <p>Email: **enquiries@walmem.com**</p>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>© Copyright Solid Wedge All Rights Reserved</p>
        <p>Designed by BrightFrame</p>
      </div>
    </footer>
  );
};

export default Footer;