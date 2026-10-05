import React, { useState } from 'react';

function Beranda() {
  // State untuk menampilkan jawaban teka-teki
  const [jawaban, setJawaban] = useState("");

  const handleKlikJawaban = () => {
    setJawaban("Waktu nulis udah ribuan baris kode, terus pas diteken 'Run', tulisannya: 'Syntax Error: missing semicolon (;) at line 1' 😭💻");
  };

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

      {/* Bagian Interaktif Teka-Teki Programmer */}
      <div style={{ textAlign: 'center', marginTop: '30px' }}>
        <p style={{ color: '#F1D9A9', fontSize: '1.05rem', fontWeight: 'bold', marginBottom: '12px' }}>
          💡 Kapan waktu paling menyedihkan buat seorang programmer?
        </p>

        <button 
          onClick={handleKlikJawaban}
          style={{
            backgroundColor: '#8B4513',
            color: '#FFF8DC',
            padding: '10px 22px',
            border: '2px solid #D2B48C',
            borderRadius: '6px',
            cursor: 'pointer',
            fontWeight: 'bold',
            fontSize: '0.95rem',
            fontFamily: 'Georgia, serif',
            boxShadow: '0 4px 6px rgba(0,0,0,0.2)'
          }}
        >
          🔍 Jawaban
        </button>
        
        {jawaban && (
          <p style={{ marginTop: '15px', color: '#FFF8DC', fontStyle: 'italic', fontSize: '0.95rem', maxWidth: '500px', marginLeft: 'auto', marginRight: 'auto', lineHeight: '1.4' }}>
            "{jawaban}"
          </p>
        )}
      </div>
    </section>
  );
}

export default Beranda;