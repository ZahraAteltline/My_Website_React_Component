import React from 'react';
import { Routes, Route } from 'react-router-dom'; // <-- Import Routes dan Route
import './App.css';

// Import komponen
import Header from './components/Header';
import Footer from './components/Footer';
import Beranda from './components/Beranda';
import About from './components/About';
import Gallery from './components/Gallery';
import Social from './components/Social';

function App() {
  return (
    <div className="vintage-container">
      {/* Header akan selalu tampil di semua halaman */}
      <Header />

      {/* KONTEN UTAMA DENGAN ROUTER */}
      <main className="vintage-main">
        <Routes>
          <Route path="/" element={<Beranda />} />
          <Route path="/about" element={<About />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/social" element={<Social />} />
        </Routes>
      </main>

      {/* Footer akan selalu tampil di semua halaman */}
      <Footer />
    </div>
  );
}

export default App;