import React from 'react';
import './MasterBusinessAnalytics.css';

const MasterBusinessAnalytics = () => {
  return (
    <div className="mba-page">

      {/* Hero Banner */}
      <section className="mba-banner">
        <div className="mba-banner-content">
          <h1>Master Certification in Business Analytics</h1>
          <p>Turn Data into Actionable Insights and Fuel Business Growth.</p>
          <a href="#mba-enquiry" className="mba-enquiry-btn">Enquire Now</a>
        </div>
      </section>

      {/* Key Features */}
      <section className="mba-features">
        <div className="mba-features-grid">
          <div>📈 Business Intelligence</div>
          <div>📊 Data Analytics Tools</div>
          <div>💼 Real-World Projects</div>
          <div>✅ 100% Placement Assistance</div>
        </div>
      </section>

      {/* Course Overview */}
      <section className="mba-overview">
        <div className="container">
          <h2>About the Program</h2>
          <p>
            Business Analytics is the application of statistical, analytical, and predictive models
            to gain insights and drive decision-making. This master program prepares you for roles in
            industries that value data-driven strategy and performance.
          </p>
          <p>
            From Excel and SQL to Tableau and Power BI, this program covers essential tools and
            techniques used by professionals across industries to analyze and visualize business performance.
          </p>
        </div>
      </section>

      {/* Curriculum */}
      <section className="mba-curriculum">
        <div className="container">
          <h2>Course Curriculum</h2>
          <ul>
            <li>🔹 MS Excel & Advanced Excel</li>
            <li>🔹 SQL for Data Queries</li>
            <li>🔹 Data Visualization with Power BI & Tableau</li>
            <li>🔹 Business Statistics & Forecasting</li>
            <li>🔹 Python Basics for Analytics</li>
            <li>🔹 Business Strategy & KPI Reporting</li>
          </ul>
        </div>
      </section>

      {/* Highlights */}
      <section className="mba-highlights">
        <div className="container">
          <h2>Course Highlights</h2>
          <div className="highlights-grid">
            <div className="highlight">📅 Duration: 5 Months</div>
            <div className="highlight">🎓 Industry-Endorsed Certification</div>
            <div className="highlight">📈 Live Industry Projects</div>
            <div className="highlight">👨‍🏫 Expert Faculty</div>
            <div className="highlight">🔐 LMS Access 24x7</div>
            <div className="highlight">💼 Internship + Placement</div>
          </div>
        </div>
      </section>

      {/* Career Paths */}
      <section className="mba-careers">
        <div className="container">
          <h2>Career Opportunities</h2>
          <ul>
            <li>🔹 Business Analyst</li>
            <li>🔹 Data Analyst</li>
            <li>🔹 BI Developer</li>
            <li>🔹 MIS Executive</li>
            <li>🔹 Reporting Analyst</li>
          </ul>
        </div>
      </section>

      {/* Enquiry Section */}
      <section className="mba-enquiry" id="mba-enquiry">
        <div className="container">
          <h2>Send Your Enquiry</h2>
          <form className="enquiry-form">
            <input type="text" placeholder="Full Name" name="name" required />
            <input type="email" placeholder="Email Address" name="email" required />
            <input type="text" placeholder="City" name="city" required />
            <input type="tel" placeholder="Mobile Number" name="phone" required />
            <button type="submit">Submit</button>
          </form>
        </div>
      </section>

    </div>
  );
};

export default MasterBusinessAnalytics;

