import React from 'react';
import { Link } from 'react-router-dom'; // <-- Import Link

function Header() {
  return (
    <header className="vintage-header">
      <h1 className="logo">✦ My Personal Space ✦</h1>
      <nav className="vintage-nav">
        {/* Gunakan 'to' untuk menentukan URL tujuannya */}
        <Link to="/" className="vintage-btn">
          Beranda
        </Link>
        <Link to="/about" className="vintage-btn">
          About Me
        </Link>
        <Link to="/gallery" className="vintage-btn">
          Gallery
        </Link>
        <Link to="/social" className="vintage-btn">
          Social
        </Link>
      </nav>
    </header>
  );
}

export default Header;