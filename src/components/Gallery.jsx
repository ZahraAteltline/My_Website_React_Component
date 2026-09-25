import React from 'react';
import artworkImg from '../assets/photo_2026-09-20_18-58-06.jpg';
import carrrImg from '../assets/photo_2026-09-20_18-57-09.jpg';
import gameImg from '../assets/Screenshot_2023-12-18-11-40-52-68_e4a2857e7ed60b38c00338875a31da84.jpg';
import bestiiImg from '../assets/DSC06744.JPG';

function Gallery() {
  return (
    <section className="fade-in">
      <h2>Gallery</h2>
      <p className="section-desc">Koleksi dokumentasi dan foto-foto favorit saya.</p>
      <div className="gallery-grid">
        <div className="vintage-card gallery-item">
          <h4>Artwork</h4>
          <img src={artworkImg} alt="Artwork" className="gallery-img" />
        </div>
        <div className="vintage-card gallery-item">
          <h4>Carrr</h4>
          <img src={carrrImg} alt="Carrr" className="gallery-img" />
        </div>
        <div className="vintage-card gallery-item">
          <h4>Game</h4>
          <img src={gameImg} alt="Game" className="gallery-img" />
        </div>
        <div className="vintage-card gallery-item">
          <h4>Bestiii</h4>
          <img src={bestiiImg} alt="Bestiii" className="gallery-img" />
        </div>
      </div>
    </section>
  );
}

export default Gallery;