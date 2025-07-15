import React from 'react';
import './Footer.css';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter, FaYoutube } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="footer-container">
        <div className="footer-col logo-col">
          <h2 className="footer-logo">NewJobs<span>.ai</span></h2>
          <p>Empowering India with Future Skills & Job-Ready Training Programs.</p>
        </div>

        <div className="footer-col">
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/advisors">Advisory Board</a></li>
           
            <li><Link to="/testimonials">Our Students</Link></li>
            <li><a href="/courses">Courses</a></li>
            <li><Link to="/gallery">Gallery</Link></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>

        <div className="footer-col">
          <h3>Contact</h3>
          <p>AB-6, First Floor, Safdarjung Enclave, Delhi - 110029</p>
          <p><a href="mailto:info@newjobs.ai">admissions@newjobs.ai</a></p>
          {/* <p><a href="tel:+911234567890">+91 12345 67890</a></p> */}
        </div>

        <div className="footer-col">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href="https://www.facebook.com/academyforupskilling" className="social-icon" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
            <a href="https://www.instagram.com/newjobs.ai/" className="social-icon" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
            <a href="https://www.linkedin.com/company/newjobs-ai/" className="social-icon" target="_blank" rel="noopener noreferrer"><FaLinkedinIn /></a>
            <a href="https://x.com/AiNewjobs" className="social-icon" target="_blank" rel="noopener noreferrer"><FaTwitter /></a> 
            <a href="https://www.youtube.com/@newjobsai" className="social-icon" target="_blank" rel="noopener noreferrer"><FaYoutube /></a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} NewJobs.ai | All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
