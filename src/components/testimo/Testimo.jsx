import React, { useState, useEffect } from 'react';
import './Testimo.css';
import student1 from '../../assets/student1.jpg';
import student2 from '../../assets/student2.jpg';
import student3 from '../../assets/student3.jpg';

const testimonials = [
  {
    image: student1,
    name: '',
    review: 'I have completed Master Certification in Digital Marketing and Brand Management from NewJobs.ai. Here I get a good environment in which I will be able to groom myself. Our master trainer Mr. Kunal sir teaches us very well. With the help of my teacher, I will be able to explore various modules of digital marketing.',
  },
  {
    image: student2,
    name: '',
    review: 'I did master certification in Digital Marketing from NewJobs.ai, a Digital Marketing Training Institute. Newjobs.ai has given me the opportunity to shape my career as a content writer. As a student I have been guided from the course to have on internship and job.',
  },
  {
    image: student3,
    name: '',
    review: 'I had completed the Master Certificate course in Digital Marketing and Brand Management from NewJobs.ai at Safdarjung Enclave. My experience regarding this course was good because I explore and learned so many new things in this field. It helps me a lot to boom my existing knowledge.',
  }
];

function Testimo() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      goToNext();
    }, 5000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };


  return (
    <div className="testimo-container">
      <h2 className="testimo-heading">Our Student Says</h2>
      <div className="carousel">
        {/* <button className="arrow left" onClick={goToPrev}>❮</button> */}

        <div className="testimonial-slide fade-slide">
          <img src={testimonials[currentIndex].image} alt={testimonials[currentIndex].name} className="student-img" />
          <h3 className="student-name">{testimonials[currentIndex].name}</h3>
          <p className="student-review">"{testimonials[currentIndex].review}"</p>
        </div>

       {/* <button className="arrow right" onClick={goToNext}>❯</button> */}
      </div>
    </div>
  );
}

export default Testimo;
