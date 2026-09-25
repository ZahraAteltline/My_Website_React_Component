import React from 'react';
import profileImg from '../assets/photo_2026-09-20_19-09-25.jpg';

function About() {
  return (
    <section className="fade-in about-section">
      <h2>About Me</h2>
      <div className="vintage-card biography">
        <h3>Profile & Biography</h3>
        <div className="profile-container">
          <img 
            src={profileImg} 
            alt="Foto Profil" 
            className="profile-img" 
          />
          <p>Halo, Pemilik Netra Indah! Nama saya Zahra'ateltline Mufidah. Saat ini saya adalah seorang mahasiswa 
             Universitas Pendidikan Indonesia semester 3 yang mengambil program studi Pendidikan Ilmu Komputer.</p>
        </div>
      </div>

      <div className="info-grid">
        <div className="vintage-card">
          <h3>Education</h3>
          <p>• S1 Pendidikan Ilmu Komputer<br />• Universitas Pendidikan Indonesia</p>
        </div>
        <div className="vintage-card">
          <h3>Skills</h3>
          <p>• C, HTML, CSS, JavaScript<br />• React JS (Beginner)<br />• UI/UX Basic Design</p>
        </div>
        <div className="vintage-card">
          <h3>Interests & Goals</h3>
          <p>• Suka menggambar dan membuat jurnal di malam hari.<br />• Target: Menjadi Game Developer.</p>
        </div>
        <div className="vintage-card">
          <h3>Lainnya</h3>
          <p>
              • TTL: Bandung, 08 Desember 2006<br />
              • Alamat: Jalan Puma II No. 10, Lanud Sulaiman<br />
              • Fav Band: Twenty One Pilots, Linkin Park, Dutch Melrose
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;