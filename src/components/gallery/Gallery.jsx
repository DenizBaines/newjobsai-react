// 📁 File: components/gallery/Gallery.jsx
import React, { useState } from 'react';
import './Gallery.css';
import Navbar from '../navbar/Navbar';
import Footer from '../footer/Footer';

const images = [
  'images/gallery/gal1.jpg',
  'images/gallery/gal2.jpg',
  'images/gallery/gal3.jpg',
  'images/gallery/gal4.jpg',
  'images/gallery/gal5.jpg',
  'images/gallery/gal6.jpg',
  'images/gallery/gal7.jpg',
  'images/gallery/gal8.jpg',
  'images/gallery/gal9.jpg',
  'images/gallery/gal10.jpg',
  'images/gallery/gal11.jpg',
  'images/gallery/gal12.jpg',
  'images/gallery/gal13.jpg',
  'images/gallery/gal14.jpg',
  'images/gallery/gal15.jpg',
  'images/gallery/gal16.jpg',
  'images/gallery/gal17.jpg',
  'images/gallery/gal18.jpg',
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