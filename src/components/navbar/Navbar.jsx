// Navbar.jsx
import React, { useState, useEffect } from 'react';
import './Navbar.css';
import { useNavigate, Link } from 'react-router-dom';

const EnhancedNavbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const navigate = useNavigate();

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  const handleScroll = React.useCallback(() => {
    const currentScrollY = window.scrollY;
    if (currentScrollY > lastScrollY && currentScrollY > 100) {
      setIsNavbarVisible(false);
    } else {
      setIsNavbarVisible(true);
    }
    setLastScrollY(currentScrollY);
  }, [lastScrollY]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMobileMenuOpen && !event.target.closest('.newjobs-nav-wrapper')) {
        closeMobileMenu();
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isMobileMenuOpen]);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : 'unset';
    return () => (document.body.style.overflow = 'unset');
  }, [isMobileMenuOpen]);

  return (
    <header className={`newjobs-navbar-header ${isNavbarVisible ? 'newjobs-navbar-visible' : 'newjobs-navbar-hidden'}`}>
      <div className="newjobs-nav-wrapper">
        <div className="newjobs-brand-section" onClick={() => navigate('/')} aria-label="Go to Home">
          <img src="/newjobs/images/homepage/newjobs_logo.png" alt="NewJobs Logo" className="newjobs-logo" />
          {/* Optional Academy text:
          <div className="newjobs-brand-secondary">
            <span className="newjobs-academy-text">A C A D E M Y</span>
          </div> */}
        </div>

        <nav className={`newjobs-navigation-menu ${isMobileMenuOpen ? 'newjobs-mobile-menu-active' : ''}`}>
          <Link to="/about" className="newjobs-nav-item" onClick={closeMobileMenu}>About Us</Link>
          <Link to="/advisors" className="newjobs-nav-item" onClick={closeMobileMenu}>Advisory Board</Link>
          <Link to="/upbatch" className="newjobs-nav-item" onClick={closeMobileMenu}>Upcoming Batches</Link>
          <Link to="/training-academy" className="newjobs-nav-item" onClick={closeMobileMenu}>NewJobs Academy</Link>
          <Link to="/contact" className="newjobs-nav-item" onClick={closeMobileMenu}>Contact Us</Link>
        </nav>

        <button className="newjobs-cta-button" onClick={() => navigate('/form')}>Enquire Now</button>

        <button className={`newjobs-hamburger-btn ${isMobileMenuOpen ? 'newjobs-hamburger-active' : ''}`} onClick={toggleMobileMenu} aria-label="Toggle mobile menu">
          <span className="newjobs-hamburger-line"></span>
          <span className="newjobs-hamburger-line"></span>
          <span className="newjobs-hamburger-line"></span>
        </button>
      </div>

      <div className={`newjobs-mobile-overlay ${isMobileMenuOpen ? 'newjobs-overlay-active' : ''}`} onClick={closeMobileMenu}></div>
    </header>
  );
};

export default EnhancedNavbar;
