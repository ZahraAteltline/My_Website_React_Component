import React from 'react';

function Social() {
  return (
    <section className="fade-in social-section">
      <h2>Social Media</h2>
      <p className="section-desc">Mari terhubung dan berteman dengan saya di platform berikut:</p>
      <div className="social-buttons">
        <a 
          href="https://www.instagram.com/zahraateltline?stkn=MXM3bWZzaTF2b3Ez" 
          target="_blank" 
          rel="noreferrer" 
          className="vintage-btn social-btn"
        >
          📸 Instagram
        </a>
        <a 
          href="https://github.com/ZahraAteltline" 
          target="_blank" 
          rel="noreferrer" 
          className="vintage-btn social-btn"
        >
          💻 GitHub
        </a>
        <a 
          href="https://www.linkedin.com/in/zahra-ateltline-mufidah-6b1639380?utm_source=share_via&utm_content=profile&utm_medium=member_android" 
          target="_blank" 
          rel="noreferrer" 
          className="vintage-btn social-btn"
        >
          💼 LinkedIn
        </a>
        <a 
          href="https://youtube.com/@zienkenberg-o8t?si=TO1j3sfBYsBR-DmH" 
          target="_blank" 
          rel="noreferrer" 
          className="vintage-btn social-btn"
        >
          ▶️ YouTube
        </a>
      </div>
    </section>
  );
}

export default Social;