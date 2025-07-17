import React from 'react';
import './Contact.css';
import Footer from '../footer/Footer';
import Navbar from '../navbar/Navbar';
import { useNavigate } from 'react-router-dom';

const Contact = () => {
  const navigate = useNavigate();

  return (
    <>
      <Navbar />
      <div className="contact-page">

        {/* Hero Image */}
        <div className="contact-hero-image">
          <img src="images/homepage/contact-hero.jpg" alt="Contact Us" />
        </div>

        {/* Contact Grid */}
        <div className="contact-info-grid">
          <div className="info-box">
            <h3>📍 Address</h3>
            <p>
              New Edtech Skills Pvt. Ltd. -
              AB-6, First Floor, Safdarjung Enclave, Delhi - 110029
            </p>
          </div>
          <div className="info-box">
            <h3>📧 Email</h3>
            <p><a href="mailto:info@newjobs.ai">admissions@newjobs.ai</a></p>
          </div>
          <div className="info-box">
            <h3>📞 Phone</h3>
            <p><a href="tel:+919911818889">+91 9911818889</a></p>
          </div>
          <div className="info-box">
            <h3>⏰ Working Hours</h3>
            <p>Mon–Sat<br /> 10:00 AM – 6:00 PM</p>
          </div>
        </div>

        {/* Google Map */}
        <div className="contact-map-container">

          <iframe 
            title="NewJobs Location"
             src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.125430741983!2d77.19658657516531!3d28.565995987099694!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce340410d39af%3A0x9e91c152aa7265bb!2snewJobs!5e0!3m2!1sen!2sin!4v1751523004994!5m2!1sen!2sin" 
            allowfullscreen="" 
            loading="lazy"  
            eferrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        {/* Enquire Button */}
        <div className="contact-cta">
          <div className="contact-desc">
          <h2>Have Questions?</h2>
          <p>We're here to help! Whether you have questions about our services, need support, or want to discuss your career goals, feel free to reach out.</p>
          <p>Click the button below to send us an enquiry or get in touch with our team.</p>
          <p>We look forward to hearing from you!</p>
          </div>
          <br />
          <button className="enquire-btn" onClick={() => navigate('/form')}>
            Enquire Now
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
