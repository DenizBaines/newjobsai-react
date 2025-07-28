// Testimo.jsx
import React, { useEffect, useState } from 'react';
import './Testimo.css';

const testimonials = [
  {
    id: 1,
    name: "Kanika",
    photo: "/newjobs/images/students/kanika.jpg",
    quote: "I have completed Master Certification in Digital Marketing and Brand Management from NewJobs.ai. Here I get a good environment in which I will be able to groom myself. With the help of my teacher, I will be able to explore various modules of digital marketing."
  },
  {
    id: 2,
    name: "Riya",
    photo: "/newjobs/images/students/riya.jpg",
    quote: "I did master certification in Digital Marketing from NewJobs.ai, a Digital Marketing Training Institute. Newjobs.ai has given me the opportunity to shape my career as a content writer. As a student I have been guided from the course to have on internship and job."
  },
  {
    id: 3,
    name: "Shubham",
    photo: "/newjobs/images/students/shubham.jpg",
    quote: "I had completed the Master Certificate course in Digital Marketing and Brand Management from NewJobs.ai at Safdarjung Enclave. My experience regarding this course was good because I explore and learned so many new things in this field."
  },
  {
    id: 4,
    name: "Keerti",
    photo: "/newjobs/images/students/keerti.jpg",
    quote: "Being the best IT training institute in Delhi NCR, NewJobs.ai is the symbol of enhancement and excellence as it gives opportunities to youth and helps them to get a better career. NewJobs.ai bridged the gap between institution and the corporate world."
  },
];

const Testimo = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const current = testimonials[index];

  return (
    <section className="testimo-section">
      <h2 className="testimo-heading">Our Students Say</h2>
      <div className="testimo-carousel">
        <div className="testimo-card">
          <img src={current.photo} alt={current.name} className="testimo-photo" />
          <p className="testimo-quote">“{current.quote}”</p>
          <p className="testimo-name">- {current.name}</p>
        </div>
      </div>
    </section>
  );
};

export default Testimo;
