import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import {
  Star, ArrowRight, PlayCircle, CheckCircle
} from 'lucide-react';
import './MasterDigitalMarketing.css';
import Footer from '../footer/Footer';

const MasterDigitalMarketing = () => {
  const [formData, setFormData] = useState({ fullName: '', email: '', city: '', mobile: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    const { fullName, email, city, mobile } = formData;
    if (!fullName || !email || !city || !mobile) {
      alert('Please fill in all fields');
      return;
    }

    setIsSubmitting(true);

    const templateParams = {
      full_name: fullName,
      email: email,
      city: city,
      mobile: mobile,
    };

    try {
      await emailjs.send('your_service_id', 'your_template_id', templateParams, 'your_public_key');
      setIsSubmitted(true);
      setFormData({ fullName: '', email: '', city: '', mobile: '' });
      setTimeout(() => setIsSubmitted(false), 5000);
    } catch (error) {
      console.error('EmailJS Error:', error);
      alert('Something went wrong. Try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="master-dm-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <div className="hero-badge">
            <Star className="icon" />
            <span>Industry Leading Program</span>
          </div>
          <h1 className="hero-title">
            Master Certification in <span className="gradient-text">Digital Marketing</span><br />& Brand Management
          </h1>
          <p className="hero-subtitle">
            Transform your career with cutting-edge digital marketing skills. Join thousands of successful graduates.
          </p>
          <div className="hero-buttons">
            <a href="#enquire" className="cta-primary">
              Enroll Now
              <ArrowRight className="icon ml-2" />
            </a>
            <button className="cta-secondary">
              <PlayCircle className="icon mr-2" />
              Watch Demo
            </button>
          </div>
        </div>
      </section>

      {/* Enquiry Section */}
      <section className="enquiry-section" id="enquire">
        <div className="enquiry-form-wrapper">
          <h2 className="form-title">Get Started Today</h2>
          {isSubmitted ? (
            <div className="success-message">
              <CheckCircle className="icon-large" />
              <h3>Form Submitted Successfully!</h3>
              <p>Thank you for your interest. We'll connect with you soon.</p>
            </div>
          ) : (
            <div className="enquiry-form">
              <input type="text" name="fullName" placeholder="Full Name" value={formData.fullName} onChange={handleInputChange} />
              <input type="email" name="email" placeholder="Email Address" value={formData.email} onChange={handleInputChange} />
              <input type="text" name="city" placeholder="City" value={formData.city} onChange={handleInputChange} />
              <input type="tel" name="mobile" placeholder="Mobile Number" value={formData.mobile} onChange={handleInputChange} />
              <button onClick={handleSubmit} className="submit-btn" disabled={isSubmitting}>
                {isSubmitting ? 'Submitting...' : 'Submit Application'}
              </button>
            </div>
          )}
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default MasterDigitalMarketing;
