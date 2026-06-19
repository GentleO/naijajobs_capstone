import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

export default function Navbar() {
  const [isDark, setIsDark] = useState(() => localStorage.getItem('theme') === 'dark');
  const location = useLocation();

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  }, [isDark]);

  return (
    <header className="site-header">
      <div className="container nav-container">
        <Link to="/" className="nav-logo">Naija<span className="gold-text">Jobs</span></Link>
        <nav className="nav-menu">
          <Link to="/" className={location.pathname === '/' ? 'active-link' : ''}>Home</Link>
          <Link to="/jobs" className={location.pathname === '/jobs' ? 'active-link' : ''}>Browse Jobs</Link>
          <Link to="/post-job" className={location.pathname === '/post-job' ? 'active-link' : ''}>Post a Job</Link>
          <Link to="/about" className={location.pathname === '/about' ? 'active-link' : ''}>About</Link>
        </nav>
        <button className="theme-toggle-btn" onClick={() => setIsDark(!isDark)}>
          {isDark ? '☀️ Light' : '🌙 Dark'}
        </button>
      </div>
    </header>
  );
}