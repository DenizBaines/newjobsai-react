import React, { useState } from 'react';
import './Enquire.css';
import Footer from '../footer/Footer';
import Navbar from '../navbar/Navbar';

const Enquire = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    course: '',
    experience: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({ type: '', message: '' });
  const [errors, setErrors] = useState({});

  // Google Apps Script Deployment URL
  const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbyDC-FV1XYptVJo_7SKyR2mGAMa-w04M6SnomOUSnMliBfCPqP-OccNk9Z_eSt7nzLo4g/exec';

  const courseOptions = [
    'Web Development',
    'Data Science',
    'Digital Marketing',
    'Mobile App Development',
    'UI/UX Design',
    'Cloud Computing',
    'Artificial Intelligence',
    'Cybersecurity',
    'Other'
  ];

  const experienceOptions = [
    'Beginner (0-1 years)',
    'Intermediate (1-3 years)',
    'Advanced (3-5 years)',
    'Expert (5+ years)',
    'Student/Fresher'
  ];

  const validateForm = () => {
    const newErrors = {};

    // Name validation
    if (!formData.firstName.trim()) {
      newErrors.firstName = 'First name is required';
    }
    if (!formData.lastName.trim()) {
      newErrors.lastName = 'Last name is required';
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    // Phone validation
    const phoneRegex = /^[+]?[\d\s\-()]{10,}$/;
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!phoneRegex.test(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number';
    }

    // Course validation
    if (!formData.course) {
      newErrors.course = 'Please select a course';
    }

    // Experience validation
    if (!formData.experience) {
      newErrors.experience = 'Please select your experience level';
    }

    // Subject validation
    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }

    // Message validation
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message should be at least 10 characters long';
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

  const submitToGoogleSheets = async (data) => {
    try {
      // Create FormData object for the Google Apps Script
      const formDataToSend = new FormData();
      
      // Add all form fields to FormData
      formDataToSend.append('firstName', data.firstName);
      formDataToSend.append('lastName', data.lastName);
      formDataToSend.append('email', data.email);
      formDataToSend.append('phone', data.phone);
      formDataToSend.append('course', data.course);
      formDataToSend.append('experience', data.experience);
      formDataToSend.append('subject', data.subject);
      formDataToSend.append('message', data.message);
      
      // Add timestamp
      formDataToSend.append('timestamp', new Date().toISOString());
      
      // Send to Google Apps Script
      await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        body: formDataToSend,
        mode: 'no-cors' // Required for Google Apps Script
      });

      // Since mode is 'no-cors', we can't read the response
      // We'll assume success if no error is thrown
      return true;
    } catch (error) {
      console.error('Error submitting to Google Sheets:', error);
      return false;
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
      // Submit to Google Sheets
      const success = await submitToGoogleSheets(formData);

      if (success) {
        setSubmitStatus({
          type: 'success',
          message: 'Thank you for your enquiry! We have received your message and will contact you soon.'
        });

        // Reset form
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          course: '',
          experience: '',
          subject: '',
          message: ''
        });
      } else {
        throw new Error('Submission failed');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus({
        type: 'error',
        message: 'Sorry, there was an error sending your enquiry. Please try again or contact us directly at admission@newjobs.ai'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div> 
      <Navbar />
      <div className="newjobs-enquire-container">
        <div className="newjobs-enquire-wrapper">
          <div className="newjobs-enquire-header">
            <h1 className="newjobs-enquire-title">Get Started Today</h1>
            <p className="newjobs-enquire-subtitle">
              Ready to transform your career? Fill out the form below and our admission team will get back to you within 24 hours.
            </p>
          </div>

          <div className="newjobs-enquire-content">
            <div className="newjobs-enquire-info">
              <div className="newjobs-info-card">
                <div className="newjobs-info-icon">📧</div>
                <h3>Email Us</h3>
                <p>admission@newjobs.ai</p>
              </div>
              
              <div className="newjobs-info-card">
                <div className="newjobs-info-icon">📞</div>
                <h3>Call Us</h3>
                <p>+91 9876543210</p>
              </div>
              
              <div className="newjobs-info-card">
                <div className="newjobs-info-icon">⏰</div>
                <h3>Response Time</h3>
                <p>Within 24 hours</p>
              </div>
              
              <div className="newjobs-info-card">
                <div className="newjobs-info-icon">🎓</div>
                <h3>Free Consultation</h3>
                <p>Career guidance included</p>
              </div>
            </div>

            <form className="newjobs-enquire-form" onSubmit={handleSubmit}>
              {submitStatus.message && (
                <div className={`newjobs-form-status ${submitStatus.type}`}>
                  {submitStatus.message}
                </div>
              )}

              <div className="newjobs-form-row">
                <div className="newjobs-form-group">
                  <label htmlFor="firstName" className="newjobs-form-label">
                    First Name *
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className={`newjobs-form-input ${errors.firstName ? 'error' : ''}`}
                    placeholder="Enter your first name"
                  />
                  {errors.firstName && <span className="newjobs-form-error">{errors.firstName}</span>}
                </div>

                <div className="newjobs-form-group">
                  <label htmlFor="lastName" className="newjobs-form-label">
                    Last Name *
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className={`newjobs-form-input ${errors.lastName ? 'error' : ''}`}
                    placeholder="Enter your last name"
                  />
                  {errors.lastName && <span className="newjobs-form-error">{errors.lastName}</span>}
                </div>
              </div>

              <div className="newjobs-form-row">
                <div className="newjobs-form-group">
                  <label htmlFor="email" className="newjobs-form-label">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className={`newjobs-form-input ${errors.email ? 'error' : ''}`}
                    placeholder="your.email@example.com"
                  />
                  {errors.email && <span className="newjobs-form-error">{errors.email}</span>}
                </div>

                <div className="newjobs-form-group">
                  <label htmlFor="phone" className="newjobs-form-label">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className={`newjobs-form-input ${errors.phone ? 'error' : ''}`}
                    placeholder="+91 9876543210"
                  />
                  {errors.phone && <span className="newjobs-form-error">{errors.phone}</span>}
                </div>
              </div>

              <div className="newjobs-form-row">
                <div className="newjobs-form-group">
                  <label htmlFor="course" className="newjobs-form-label">
                    Course of Interest *
                  </label>
                  <select
                    id="course"
                    name="course"
                    value={formData.course}
                    onChange={handleInputChange}
                    className={`newjobs-form-select ${errors.course ? 'error' : ''}`}
                  >
                    <option value="">Select a course</option>
                    {courseOptions.map((course, index) => (
                      <option key={index} value={course}>
                        {course}
                      </option>
                    ))}
                  </select>
                  {errors.course && <span className="newjobs-form-error">{errors.course}</span>}
                </div>

                <div className="newjobs-form-group">
                  <label htmlFor="experience" className="newjobs-form-label">
                    Experience Level *
                  </label>
                  <select
                    id="experience"
                    name="experience"
                    value={formData.experience}
                    onChange={handleInputChange}
                    className={`newjobs-form-select ${errors.experience ? 'error' : ''}`}
                  >
                    <option value="">Select experience level</option>
                    {experienceOptions.map((exp, index) => (
                      <option key={index} value={exp}>
                        {exp}
                      </option>
                    ))}
                  </select>
                  {errors.experience && <span className="newjobs-form-error">{errors.experience}</span>}
                </div>
              </div>

              <div className="newjobs-form-group">
                <label htmlFor="subject" className="newjobs-form-label">
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className={`newjobs-form-input ${errors.subject ? 'error' : ''}`}
                  placeholder="What would you like to know about?"
                />
                {errors.subject && <span className="newjobs-form-error">{errors.subject}</span>}
              </div>

              <div className="newjobs-form-group">
                <label htmlFor="message" className="newjobs-form-label">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  className={`newjobs-form-textarea ${errors.message ? 'error' : ''}`}
                  placeholder="Tell us about your goals, questions, or any specific requirements..."
                  rows="5"
                ></textarea>
                {errors.message && <span className="newjobs-form-error">{errors.message}</span>}
              </div>

              <button
                type="submit"
                className="newjobs-form-submit"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <span className="newjobs-spinner"></span>
                    Sending...
                  </>
                ) : (
                  'Send Enquiry'
                )}
              </button>

              <p className="newjobs-form-note">
                * Required fields. We respect your privacy and will never share your information.
              </p>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Enquire;