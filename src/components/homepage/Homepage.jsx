import React from 'react';
import './Homepage.css'; // Assuming you have a CSS file for styling
import Footer from '../footer/Footer';
import { FaSchool } from "react-icons/fa";
import { LiaUniversitySolid, LiaCertificateSolid } from "react-icons/lia";
import { IoBagCheck } from "react-icons/io5";
import { VscWorkspaceTrusted } from "react-icons/vsc";
import { PiCertificateFill } from "react-icons/pi";
import { BiSolidOffer } from "react-icons/bi";
import { MdModelTraining } from "react-icons/md";
import Navbar from '../navbar/Navbar'; // Importing the Navbar component
import { Link } from 'react-router-dom';
import Testimo from '../testimo/Testimo'; 
const Homepage = () => {
  return (
   
      
       <div className="homepage">
        <Navbar /> 
      {/* Navigation Header */}
      {/* <header className="navbar">
        <div className="nav-container">
          <div className="logo">
            <span className="logo-text">newJobs</span>
            <div className="logo-subtext">
              <span className="colorful-text">A C A D E M Y</span>
            </div>
          </div>
          <nav className="nav-menu">
            <a href="#home" className="nav-link">Home</a>
            <a href="about" className="nav-link">About Us</a>
            <a href="advisors" className="nav-link">Advisory Board</a>
            <div className="nav-dropdown">
              <a href="#courses" className="nav-link">Courses ▾</a>
            </div>
            <a href="#batches" className="nav-link">Upcoming Batches</a>
            <a href="training-academy" className="nav-link">NewJobs Academy</a>
            <a href="contact" className="nav-link">Contact Us</a>
          </nav>
          <button className="enquire-btn">Enquire Now</button>
        </div>
      </header> */}
      

      {/* Hero Section */}
      <section className="hero-section-hs">
        <div className="hero-container-hs">
          <div className="hero-content-hs">
            <h1 className="hero-title-hs">
              Get Skilled for<br />
              New Jobs in IT<br />
              Industry
            </h1>
            
            
            <div className="parent-container-button">
            <Link to="form">
               <button className="hero-cta-hs-button">
                   Enquire Now!!
               </button>
            </Link>
            </div>

          </div>
          <div className="hero-visual-hs">
            <div className="isometric-elements">
              <div className="iso-element iso-1"></div>
              <div className="iso-element iso-2"></div>
              <div className="iso-element iso-3"></div>
              <div className="iso-element iso-4"></div>
              <div className="iso-element iso-5"></div>
            </div>
          </div>
        </div>
        <div className="hero-tagline-hs">
          <h2>NewJobs: IT Course Training Institute to Grab New Job Opportunities!!</h2>
        </div>
      </section>

      {/* Master Certification Programs */}
      <section className="certification-section">
        <div className="container">
          <h2 className="section-title">Master Certification Program<br />with Job Offer</h2>
          
          <div className="programs-grid">
            <div className="program-card">
              <div className="program-image digital-marketing">
              </div>
              <h3>Digital Marketing </h3>
              <h4>Master Certification in Digital Marketing (500HRS)</h4>
              <div className="program-content">
                <h5>Programme</h5>
                <ul className="program-list">
                  <li>✓ Search Engine Optimization</li>
                  <li>✓ Google algorithm updates</li>
                  <li>✓ Adwords</li>
                  <li>✓ Google Analytics</li>
                  <li>✓ Online Reputation Management</li>
                </ul>
                <Link to='/form'>
                    <button className="program-btn">Know More</button>
                </Link>
              </div>
            </div>

            <div className="program-card">
              <div className="program-image data-science"></div>
              <h3>Data Science & AI</h3>
              <h4>Master Certification in Data Science and AI (500HRS)</h4>
              <div className="program-content">
                <h5>Programme</h5>
                <ul className="program-list">
                  <li>✓ R & Python Programming</li>
                  <li>✓ Machine Learning, Neural Networks</li>
                  <li>✓ Natural Language Processing</li>
                  <li>✓ SQL</li>
                  <li>✓ Image Detection through Computer Vision</li>
                </ul>
                <Link to='/form'>
                <button className="program-btn">Know More</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Advance Certification Programs */}
      <section className="advance-section-adv">
        <div className="container">
          <h2 className="section-title">Advance Certification Program<br />with Job Offer</h2>
          
          <div className="programs-grid-adv">
            <div className="program-card">
              <div className="program-image digital-marketing"></div>
              <h3>Digital Marketing</h3>
              <h4>Advance Certification in Digital Marketing (300HRS)</h4>
              <div className="program-content">
                <h5>Programme</h5>
                <ul className="program-list">
                  <li>✓ Website creation</li>
                  <li>✓ Social Algorithm</li>
                  <li>✓ Email Marketing techniques</li>
                </ul>
                <Link to='/form'>
                <button className="program-btn">Know More</button>
                </Link>
              </div>
            </div>

            <div className="program-card">
              <div className="program-image data-analytics"></div>
              <h3>Data Analytics</h3>
              <h4>Advance Certification in Data Analytics (240HRS)</h4>
              <div className="program-content">
                <h5>Programme</h5>
                <ul className="program-list">
                  <li>✓ Business Analytics</li>
                  <li>✓ Excel as a Business Analytics Tool</li>
                  <li>✓ Power BI – Analyse and visualize your</li>
                </ul>
                <Link to='/form'>
                <button className="program-btn">Know More</button>
                </Link>
              </div>
            </div>

            <div className="program-card">
              <div className="program-image data-science"></div>
              <h3>Data Science & AI</h3>
              <h4>Advance Certification in Data Science and AI (340HRS)</h4>
              <div className="program-content">
                <h5>Programme</h5>
                <ul className="program-list">
                  <li>✓ Introduction to Data Science</li>
                  <li>✓ R programming</li>
                  <li>✓ Python Programming</li>
                </ul>
                <Link to='/form'>
                <button className="program-btn">Know More</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dual Certification */}
      <section className="dual-certification">
        <div className="container">
          <h2 className="section-title">Get Dual Certification</h2>
          <p className="dual-cert-description">
            New EdTech Skills through its initiative newjobs.ai brings training programs developed as per demands in 4th Industrial Era especially in the area of technology. The programs of the best institute for it courses in Delhi are developed by Industry experts and aligned with National Qualification Framework (NSQF). The programs of this IT training institute in Delhi NCR are approved by respective Sector Skill Councils like NASSCOM SSC, Media SSC along with National Skill Development Corporation (NSDC). The programs will lead to dual certification, one from newjobs.ai and the other from respective Sector Skill Council & NSDC. The focus of the program is on developing the skills of students who have just passed out from colleges.
          </p>
          
          <div className="certification-logos">
            <div className="cert-logo ftec">
              <img src="/newjobs/images/dual/ftec.png" alt="FTE Logo" />
            </div>
            <div className="cert-logo nsdc">
              <img src="/newjobs/images/dual/nsdc.png" alt="NSDC Logo" />
            </div>
            <div className="cert-logo skill-council">
              <img src="/newjobs/images/dual/mesc.png" alt="Skill Council Logo" />
            </div>
            <div className="cert-logo nasscom">
              <img src="/newjobs/images/dual/nasscom.png" alt="NASSCOM Logo" />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="container">
          <h2 className="section-title">Features</h2>
          
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon master-trainers"> <MdModelTraining size={32} /> </div>
              <h3>MASTER TRAINERS</h3>
              <p>Training by Industry Leaders in relevant sectors</p>
            </div>

            <div className="feature-card">
              <div className="feature-icon job-offer"> <BiSolidOffer size={32} /> </div>
              <h3>JOB OFFER</h3>
              <p>Unique Job Offer along with the Program Admission</p>
            </div>

            <div className="feature-card">
              <div className="feature-icon nsqf-aligned"> <LiaCertificateSolid size={32} /> </div>
              <h3>NSQF ALIGNED CURRICULUM</h3>
              <p>Course Content aligned with NSQF</p>
            </div>

            <div className="feature-card">
              <div className="feature-icon certification"> <PiCertificateFill size={32} /></div>
              <h3>CERTIFICATION</h3>
              <p>Globally accepted Certification including Gulf and Europe</p>
            </div>
          </div>
        </div>
      </section>

      {/* Who Should Upskill Section */}
      <section className="upskill-section">
        <div className="container">
          <h2 className="section-title">Who Should upskill</h2>
          
          <div className="upskill-grid">
            <div className="upskill-card">
              <div className="upskill-icon school-passout"> <FaSchool size={32} /> </div>
              <h3>School Passout</h3>
            </div>

            <div className="upskill-card">
              <div className="upskill-icon graduates"> <LiaUniversitySolid size={32} /> </div>
              <h3>UG/Graduates</h3>
            </div>

            <div className="upskill-card">
              <div className="upskill-icon job-aspirant"> <IoBagCheck size={32} /> </div>
              <h3>Job Aspirant</h3>
            </div>

            <div className="upskill-card">
              <div className="upskill-icon professionals"> <VscWorkspaceTrusted size={32} /> </div>
              <h3>Working Professionals</h3>
            </div>
          </div>
        </div>
      </section>

     
   

      {/* Social Media Sidebar */}
      <div className="social-sidebar">
      { /* <a href="#" className="social-link facebook"></a> */ }
       {/* <a href="#" className="social-link linkedin"></a>
        <a href="#" className="social-link instagram"></a>
        <a href="#" className="social-link twitter"></a>
        <a href="#" className="social-link youtube"></a> */}
       
      </div>
       <Testimo />
     <Footer />
  </div>
  );
};

export default Homepage;