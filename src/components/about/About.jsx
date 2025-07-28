import React from 'react';
import './About.css';
import Navbar from '../navbar/Navbar';
import Footer from '../footer/Footer';




const About = () => {
 



  return (
    <div>
      <Navbar />

      <div className="hero-image-wrapper">
          <img src="/newjobs/images/homepage/about.png" alt="About Us Banner" className="hero-image" />
        </div>

      <div className="about-page">
        {/* Hero Image */}
        

        {/* About Us */}
        <section className="about-hero">
          <h1 className="about-title">ABOUT US <br /> Pioneer in Training & Employability Skills</h1>
          <p className="about-description">
            Newjobs.ai, an initiative of F-TEC since 1995, is committed to equipping India’s youth with future-ready skills in AI, Data Science, Digital Marketing, Cyber Security, and more to thrive in the era of Industry 4.0.
          </p>
        </section>

        {/* Mission Section */}
        <section className="mission-section">
          <h2>A Great Place to Learn & Grow</h2>
          <p>
            A global job-connect platform driven by AI, bridging institutions, industry, and job seekers through cutting-edge training.
          </p>

          <div className="mission-features">
            <div className="feature-card">
              <i className="fas fa-graduation-cap feature-icon"></i>
              <h3>Scholarships</h3>
              <p>10,000+ opportunities in the next 7 years for aspiring professionals.</p>
            </div>
            <div className="feature-card">
              <i className="fas fa-laptop-code feature-icon"></i>
              <h3>Smart LMS</h3>
              <p>24x7 access to live & recorded sessions via our advanced Learning Management System.</p>
            </div>
            <div className="feature-card">
              <i className="fas fa-briefcase feature-icon"></i>
              <h3>Internships</h3>
              <p>Integrated internships for hands-on experience during certification programs.</p>
            </div>
            <div className="feature-card">
              <i className="fas fa-project-diagram feature-icon"></i>
              <h3>Live Projects</h3>
              <p>Engage in real-world projects with simulator-driven labs and industry case studies.</p>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        
      </div>

      <Footer />
    </div>
  );
};

export default About;




// Deployment ID - AKfycbynqKmM4drl00GER9mtfML88fJ3AjlO5nkx-BBYY9q8-gsRk7Krd-wyhGSSwuTOrRbcSQ

// Deployment URL - https://script.google.com/macros/s/AKfycbynqKmM4drl00GER9mtfML88fJ3AjlO5nkx-BBYY9q8-gsRk7Krd-wyhGSSwuTOrRbcSQ/exec