// 📁 File: components/gallery/Gallery.jsx
import React, { useState } from 'react';
import './Gallery.css';
import Navbar from '../navbar/Navbar';
import Footer from '../footer/Footer';

const images = [
  '/newjobs/images/gallery/gal1.jpg',
  '/newjobs/images/gallery/gal2.jpg',
  '/newjobs/images/gallery/gal3.jpg',
  '/newjobs/images/gallery/gal4.jpg',
  '/newjobs/images/gallery/gal5.jpg',
  '/newjobs/images/gallery/gal6.jpg',
  '/newjobs/images/gallery/gal7.jpg',
  '/newjobs/images/gallery/gal8.jpg',
  '/newjobs/images/gallery/gal9.jpg',
  '/newjobs/images/gallery/gal10.jpg',
  '/newjobs/images/gallery/gal11.jpg',
  '/newjobs/images/gallery/gal12.jpg',
  '/newjobs/images/gallery/gal13.jpg',
  '/newjobs/images/gallery/gal14.jpg',
  '/newjobs/images/gallery/gal15.jpg',
  '/newjobs/images/gallery/gal16.jpg',
  '/newjobs/images/gallery/gal17.jpg',
  '/newjobs/images/gallery/gal18.jpg',
];

const Gallery = () => {
  const [modalImage, setModalImage] = useState(null);

  const openModal = (img) => setModalImage(img);
  const closeModal = () => setModalImage(null);

  return (
    <>
      <Navbar />
      <div className="gallery-page">
        <h1 className="gallery-title">Our Gallery</h1>
        <p className="gallery-subtitle">Memories, Events & Achievements</p>

        <div className="gallery-grid">
          {images.map((img, idx) => (
            <div className="gallery-item" key={idx} onClick={() => openModal(img)}>
              <img src={img} alt={`Gallery ${idx + 1}`} loading="lazy" />
            </div>
          ))}
        </div>
      </div>

      {modalImage && (
        <div className="gallery-modal" onClick={closeModal}>
          <div className="gallery-modal-content" onClick={(e) => e.stopPropagation()}>
            <img src={modalImage} alt="Enlarged view" />
            <button className="modal-close-btn" onClick={closeModal}>&times;</button>
          </div>
        </div>
      )}

      <Footer />
    </>
  );
};

export default Gallery;


// Akela Pan khaye Jaa raha hai mujhe, and iska koi fix solution bhi nahi hai. 