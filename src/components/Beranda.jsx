import React from 'react';

function Beranda() {
  return (
    <section className="fade-in">
      <div className="hero-section">
        <h2>Selamat Datang di Website Saya</h2>
        <p className="intro-text">"Untukmu yang Meluangkan Waktu, Selamat Datang untuk Menjelajah."</p>
      </div>
      
      <div className="card-grid">
        <div className="vintage-card">
          <h3>What I Do</h3>
          <p>Belajar Pemrograman Internet, mengembangkan antarmuka web, dan merancang estetika digital sederhana.</p>
        </div>
        <div className="vintage-card">
          <h3>Featured Project</h3>
          <p>Website Portofolio Level Pemula menggunakan React JS dengan tema warna hangat vintage.</p>
        </div>
      </div>

      <div className="motto-box">
        <p><strong>Motto Hidup:</strong> "Jangan Takut Berjalan Lambat, Takutlah Berhenti Di Tempat."</p>
      </div>
    </section>
  );
}

export default Beranda;