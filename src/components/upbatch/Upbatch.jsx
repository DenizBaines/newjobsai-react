import React from 'react';
import './Upbatch.css';
import Navbar from '../navbar/Navbar';
import Footer from '../footer/Footer';
import { useNavigate } from 'react-router-dom';

const batches = [
  {
    title: 'Master Certification in Data Science & AI',
    image: './newjobs/images/upbatch/data_science.jpg',
  },
  {
    title: 'Proficiency in Social Media Management',
    image: './newjobs/images/upbatch/social_media.jpg',
  },
  {
    title: 'Proficiency Program in Python',
    image: './newjobs/images/upbatch/python.jpg',
  },
  {
    title: 'Master Certification in Digital Marketing & Brand Management',
    image: './newjobs/images/upbatch/digital_marketing.jpg',
  },
   {
    title: 'Foundation Course in Data Science & AI',
    image: './newjobs/images/upbatch/ai.jpg',
  },
   {
    title: 'Foundation Course in Digital Marketing',
    image: './newjobs/images/upbatch/digital_market.jpg',
  },
];




const Upbatch = () => {

  const navigate = useNavigate();

      const handleClick = () => {
             navigate('/form');
     };

  return (
    <div> <Navbar /> 
    <div className="upbatch-container">
      <h1 className="heading">Upcoming Batches</h1>
      <div className="batch-grid">
        {batches.map((batch, index) => (
          <div className="batch-card" key={index}>
            <img src={batch.image} alt={batch.title} className="batch-image" />
            <div className="batch-info">
              <h3>{batch.title}</h3>
              <p><strong>START DATE:</strong> Coming Soon</p>
              <p><strong>BATCH TIME:</strong> Coming Soon</p>
              <button className="enquire-btn" onClick={handleClick}>
              Enquire Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
    <Footer />
    </div>
  );
};

export default Upbatch;


