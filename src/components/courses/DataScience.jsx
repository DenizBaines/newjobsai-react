import React from 'react';
import { ArrowRight, CheckCircle, Users, TrendingUp, Award, BookOpen, Code, BarChart3, Database, Brain } from 'lucide-react';
import './DataScience.css';

import Footer from '../footer/Footer';
import Navbar from '../navbar/Navbar'; // Importing the Navbar component



const DataScience = () => {
  const handleEnrollClick = () => {
    // Navigate to form page
    window.location.href = '/form';
  };

  const curriculumItems = [
    "Introduction to Analytics domain including AI and Big Data",
    "BASICS OF STATISTICS including Data Summarization, Exploration, Distribution & Testing",
    "Introduction to R as a Platform & R Programming working with R objects, importing & exporting data",
    "Data Manipulations And Looping In R including Functional Programming",
    "Data Visualization Data Analysis, Visualizing Data using Advance Packages / Libraries & Advance Plots",
    "Statistics in R (Descriptive Statistics, Data Distribution, Sampling and Sampling Distribution, and Correlation)",
    "INFERENTIAL STATISTICS IN R (Hypothesis Testing, Analysis of Variance)",
    "DATA PRE-PROCESSING : CLEAN AND TRANSFORM THE DATA (Vectorized Operations, Data Manipulation using TidyR)",
    "MACHINE LEARNING (Unsupervised, Associative Learning And Ensemble Methods)",
    "PYTHON (In-Depth topics from Jupyter Notebook, lists, functions, file management, Pandas, Matplotlib)",
    "TEXT ANALYTICS (Text Mining, Sentiment Analysis) Project"
  ];

  const highlights = [
    { icon: <BookOpen className="w-5 h-5" />, text: "Course Duration: 500 hrs" },
    { icon: <Users className="w-5 h-5" />, text: "100+ Live Experiment & Projects" },
    { icon: <Code className="w-5 h-5" />, text: "100+ Case Studies & Real World Projects" },
    { icon: <Award className="w-5 h-5" />, text: "Industry Professional & Academia Faculty" },
    { icon: <TrendingUp className="w-5 h-5" />, text: "Top Data Analytics Tools Covered" },
    { icon: <Database className="w-5 h-5" />, text: "Access to E-Content" },
    { icon: <BarChart3 className="w-5 h-5" />, text: "24x7 Support & LMS Access" },
    { icon: <CheckCircle className="w-5 h-5" />, text: "Active Q/A Forum" },
    { icon: <Brain className="w-5 h-5" />, text: "Globally Recognized Certification" }
  ];

  const careerPaths = [
    "Data Engineer",
    "Data Analyst", 
    "Data Scientist",
    "Data and Analytics Manager"
  ];

  return (
    <div>
       <Navbar />
    <div className="data-science-container">
      {/* Hero Section */}
      <div className="hero-section">
        <div className="hero-content">
          <h1 className="main-title">MASTER CERTIFICATION IN DATA SCIENCE</h1>
          
          <div className="upskilling-card">
            <h2 className="upskilling-title">THE UPSKILLING IMPERATIVE</h2>
            <div className="stats-grid">
              <div className="stat-item">
                <span className="stat-number">79%</span>
                <span className="stat-text">of CEOs are concerned about employees' lack of essential skills & identify the issue as a threat to growth</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">60%</span>
                <span className="stat-text">of employees believe their current skill set will be out-dated in the next three to five years</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">46%</span>
                <span className="stat-text">of CEOs cite "significant retraining/upskilling" as the top strategy to close a potential skills gap in their organisation</span>
              </div>
            </div>
          </div>

          <div className="did-you-know">
            <h3>DID YOU KNOW?</h3>
            <ul>
              <li>According to Analytics Insight, there will be 137630 jobs for Data Science in India by 2025</li>
              <li>Median salary of a Data Scientist in India is 9.8 lac per annum</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Course Highlights */}
      <div className="highlights-section">
        <h2 className="section-title">COURSE HIGHLIGHTS</h2>
        <div className="highlights-grid">
          {highlights.map((highlight, index) => (
            <div key={index} className="highlight-item">
              <div className="highlight-icon">
                {highlight.icon}
              </div>
              <span className="highlight-text">{highlight.text}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Course Curriculum */}
      <div className="curriculum-section">
        <h2 className="section-title">COURSE CURRICULUM</h2>
        <div className="curriculum-list">
          {curriculumItems.map((item, index) => (
            <div key={index} className="curriculum-item">
              <span className="curriculum-number">{index + 1}.</span>
              <span className="curriculum-text">{item}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Career Path */}
      <div className="career-section">
        <h2 className="section-title">CAREER PATH</h2>
        <div className="career-grid">
          {careerPaths.map((path, index) => (
            <div key={index} className="career-item">
              <span className="career-bullet">•</span>
              <span className="career-text">{path}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Certification Bodies */}
      <div className="certification-section">
        <h2 className="section-title">AFFILIATED CERTIFICATION BODIES</h2>
        <div className="certification-grid">
          <div className="certification-item">
            <div className="cert-logo">NSDC</div>
            <p>National Skill Development Corporation</p>
          </div>
          <div className="certification-item">
            <div className="cert-logo">NASSCOM</div>
            <p>IT-ITES SSC</p>
          </div>
          <div className="certification-item">
            <div className="cert-logo">ICDL</div>
            <p>International Computer Driving License</p>
          </div>
        </div>
        
        <div className="nsqf-info">
          <h3>BENEFITS OF NSQF NATIONAL SKILLS QUALIFICATIONS FRAMEWORK</h3>
          <p>National Skills Qualifications Framework (NSQF) is a competency-based framework that organizes qualifications according to a series of knowledge, skills and aptitude. It aims at bridging the demand-supply gap for skilled workforce and provides way for their upward mobility.</p>
        </div>
      </div>

      {/* CTA Button */}
      <div className="cta-section">
        <button className="enroll-btn" onClick={handleEnrollClick}>
          <span>Enroll Now</span>
          <ArrowRight className="w-5 h-5 ml-2" />
        </button>
      </div>
    </div>
    <Footer />
    </div>
  );
};

export default DataScience;