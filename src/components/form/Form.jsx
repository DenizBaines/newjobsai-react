import React, { useState } from 'react';
import './Form.css';
import Navbar from '../navbar/Navbar';
import Footer from '../footer/Footer';



function FormToSheet() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    course: '',
    experience: '',
    message: '',
  });


/* https://script.google.com/macros/library/d/1LyQMSfO_moUX6_AZh2qchtUCUfLAX79hMsctOcbrLJefJYijZZNb_DMH/2 */



  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({ type: '', message: '' });
  const [errors, setErrors] = useState({});

  // Google Apps Script URL
  const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbyLqKmHutYuG29yILSzPoHYA2-2s0bRmF1zcN70bVksBjKI8JXopN9mmG62KCcD1oeMcw/exec";

  const validateForm = () => {
    const newErrors = {};

    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters long';
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  if (!validateForm()) {
    setSubmitStatus({
      type: 'error',
      message: 'Please fix the errors below and try again.'
    });
    return;
  }

  setIsSubmitting(true);
  setSubmitStatus({ type: '', message: '' });

  try {
    const formPayload = new URLSearchParams({
      Name: formData.name,
      Email: formData.email,
      Phone: formData.phone,
      Course: formData.course,
      Experience: formData.experience,
      Message: formData.message,
    });

    const response = await fetch(GOOGLE_SCRIPT_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: formPayload.toString()
    });

    await response.text();

    if (response.ok) {
      setSubmitStatus({
        type: 'success',
        message: 'Thank you! Your information has been submitted successfully.'
      });

      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        course: '',
        experience: '',
        message: ''
      });
    } else {
      throw new Error('Submission failed');
    }
  } catch (error) {
    console.error('Form submission error:', error);
    setSubmitStatus({
      type: 'error',
      message: 'Sorry, there was an error submitting your information. Please try again.'
    });
  } finally {
    setIsSubmitting(false);
  }
};


  return (
    <div>
         <Navbar />
    <div className="form-container">
      <div className="form-wrapper">
        <div className="form-header">
          <h1 className="form-title">Stay Connected</h1>
          <p className="form-subtitle">
            Join our community and get the latest updates delivered straight to your inbox.
          </p>
        </div>

        <div className="form-content">
          <div className="form-info">
            <div className="info-card">
              <div className="info-icon">🚀</div>
              <h3>Quick & Easy</h3>
              <p>Fill the form to know more details about the required course</p>
            </div>
            
            <div className="info-card">
              <div className="info-icon">🔒</div>
              <h3>Secure</h3>
              <p>Your data is protected and will never be shared</p>
            </div>
            
            <div className="info-card">
              <div className="info-icon">📧</div>
              <h3>Stay Updated</h3>
              <p>Get notifications about new courses and updates</p>
            </div>
          </div>

          <form className="modern-form" onSubmit={handleSubmit}>
            {submitStatus.message && (
              <div className={`form-status ${submitStatus.type}`}>
                {submitStatus.message}
              </div>
            )}

            <div className="form-group">
              <label htmlFor="name" className="form-label">
                Full Name 
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className={`form-input ${errors.name ? 'error' : ''}`}
                placeholder="Enter your full name"
              />
              {errors.name && <span className="form-error">{errors.name}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="email" className="form-label">
                Email Address 
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className={`form-input ${errors.email ? 'error' : ''}`}
                placeholder="your.email@example.com"
              />
              {errors.email && <span className="form-error">{errors.email}</span>}
            </div>

           
           <div className="form-group">
  <label htmlFor="phone" className="form-label">Phone Number</label>
  <input
    type="tel"
    id="phone"
    name="phone"
    value={formData.phone}
    onChange={handleInputChange}
    className="form-input"
    placeholder="Enter your phone number"
  />
</div>

<div className="form-group">
  <label htmlFor="course" className="form-label">Course</label>
  <input
    type="text"
    id="course"
    name="course"
    value={formData.course}
    onChange={handleInputChange}
    className="form-input"
    placeholder="Which course are you interested in?"
  />
</div>

<div className="form-group">
  <label htmlFor="experience" className="form-label">Experience</label>
  <input
    type="text"
    id="experience"
    name="experience"
    value={formData.experience}
    onChange={handleInputChange}
    className="form-input"
    placeholder="Your work or academic experience"
  />
</div>

<div className="form-group">
  <label htmlFor="message" className="form-label">Message</label>
  <textarea
    id="message"
    name="message"
    value={formData.message}
    onChange={handleInputChange}
    className="form-input"
    placeholder="Write your message or questions"
  />
</div>



            <button
              type="submit"
              className="form-submit"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <span className="spinner"></span>
                  Submitting...
                </>
              ) : (
                'Submit Now'
              )}
            </button>

            <p className="form-note">
              * Required fields. We respect your privacy and follow GDPR guidelines.
            </p>
          </form>
        </div>
      </div>
    </div>

     <Footer />
    </div>
  );
}

export default FormToSheet;