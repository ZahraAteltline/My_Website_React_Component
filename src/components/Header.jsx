import React from 'react';

function Header({ activeTab, setActiveTab }) {
  return (
    <header className="vintage-header">
      <h1 className="logo">✦ My Personal Space ✦</h1>
      <nav className="vintage-nav">
        <button 
          className={`vintage-btn ${activeTab === 'beranda' ? 'active' : ''}`}
          onClick={() => setActiveTab('beranda')}
        >
          Beranda
        </button>
        <button 
          className={`vintage-btn ${activeTab === 'about' ? 'active' : ''}`}
          onClick={() => setActiveTab('about')}
        >
          About Me
        </button>
        <button 
          className={`vintage-btn ${activeTab === 'gallery' ? 'active' : ''}`}
          onClick={() => setActiveTab('gallery')}
        >
          Gallery
        </button>
        <button 
          className={`vintage-btn ${activeTab === 'social' ? 'active' : ''}`}
          onClick={() => setActiveTab('social')}
        >
          Social
        </button>
      </nav>
    </header>
  );
}

export default Header;