import React, { useState } from 'react';
import './App.css';

// Import komponen-komponen yang sudah dibuat
import Header from './components/Header';
import Footer from './components/Footer';
import Beranda from './components/Beranda';
import About from './components/About';
import Gallery from './components/Gallery';
import Social from './components/Social';

function App() {
  const [activeTab, setActiveTab] = useState('beranda');

  return (
    <div className="vintage-container">
      {/* HEADER & NAVIGASI */}
      <Header activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* KONTEN UTAMA */}
      <main className="vintage-main">
        {activeTab === 'beranda' && <Beranda />}
        {activeTab === 'about' && <About />}
        {activeTab === 'gallery' && <Gallery />}
        {activeTab === 'social' && <Social />}
      </main>

      {/* FOOTER */}
      <Footer />
    </div>
  );
}

export default App;