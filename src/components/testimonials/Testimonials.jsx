// src/components/testimonials/Testimonials.jsx
import React from 'react';
import './Testimonials.css';
import Navbar from '../navbar/Navbar';
import Footer from '../footer/Footer';


//import mukeshImg from '../assets/images/students/Mukesh.jpg';


const studentTestimonials = [
  {
    name: 'Mukesh',
    course: 'Marketing',
    image: '/images/students/Mukesh.jpg',
    testimonial: "NewJobs.ai was definitely a paradise for students who aspire to achieve par excellence in the field of Marketing. With an astute attention to detail, backed up by current market trends, marketing and various techniques have been made interesting by the faculty of NewJobs.ai."
  },
  {
    name: 'Ankit',
    course: 'Career-Focused Training',
    image: '/images/students/Ankit.jpg',
    testimonial: "The quality of education imparted by the NewJobs.ai faculty is exhaustive and helpful for a career oriented student. The regular learning with live examples approach enabled me to take a step forward, motivated me to work hard and get the latest skills and helped getting placed with an exceptional offer."
  },
  {
    name: 'Keerti',
    course: 'IT Training',
    image: '/images/students/Keerti.jpg',
    testimonial: "Being the best IT training institute in Delhi NCR, NewJobs.ai is the symbol of enhancement and excellence as it gives opportunities to youth and helps them to get a better career. NewJobs.ai bridged the gap between institution and the corporate world by providing a helping hand."
  },
  {
    name: 'Kanika',
    course: 'Digital Marketing and Brand Management',
    image: '/images/students/Kanika.jpg',
    testimonial: "I have completed Master Certification in Digital Marketing and Brand Management from NewJobs.ai. Here I get a good environment in which I will be able to groom myself. Our master trainer Mr. Kunal sir teaches us very well. With the help of my teacher, I will be able to explore various modules of digital marketing."
  },
  {
    name: 'Shubham Negi',
    course: 'Digital Marketing and Brand Management',
    image: '/images/students/Shubham.jpg',
    testimonial: "I had completed the Master Certificate course in Digital Marketing and Brand Management from NewJobs.ai at Safdarjung Enclave. My experience regarding this course was good because I explore and learned so many new things in this field. It helps me a lot to boom my existing knowledge."
  },
  {
    name: 'Dipin Bhardwaj',
    course: 'Digital Marketing and Brand Management',
    image: '/images/students/Dipin.jpg',
    testimonial: "I have completed a Master Certification in Digital Marketing and Brand Management course from NewJobs.ai Safdarjung Enclave. My long term goal is to gain work exposure in Digital Marketing and secure a senior position in the workplace. I am self-motivated and believe in upskilling myself by learning new things."
  },
  {
    name: 'Riya Dey',
    course: 'Digital Marketing',
    image: '/images/students/Riya.jpg',
    testimonial: "I did master certification in Digital Marketing from NewJobs.ai, a Digital Marketing Training Institute. Newjobs.ai has given me the opportunity to shape my career as a content writer. As a student I have been guided from the course to have on internship and job."
  },
  {
    name: 'Yashika Bhagat',
    course: 'Digital Marketing',
    image: '/images/students/Yashika.jpg',
    testimonial: "I did my Master Certification in Digital Marketing from NewJobs.ai. By joining NewJobs.ai I gained the insights and got the opportunity as an intern and even got a placement."
  },
];

const Testimonials = () => {
  return (

    <div> 
        <Navbar />

        
    <div className="testimonial-page">
      <h1 className="testimonial-heading">What Our Student Says</h1>
      <p className="testimonial-subtext">Hear what our students have to say about their journey with NewJobs.ai</p>
      <div className="testimonial-grid">
        {studentTestimonials.map((student, index) => (
          <div className="testimonial-card" key={index}>
            <img src={student.image} alt={student.name} className="student-img" />
            <h3>{student.name}</h3>
            <h4>{student.course}</h4>
            <p className="testimonial-text">“{student.testimonial}”</p>
          </div>
        ))}
      </div>
    </div>

    <Footer />
    </div>
  );
};

export default Testimonials;
