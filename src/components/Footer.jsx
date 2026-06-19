// src/components/Footer.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="container footer-container">
        
        <div className="footer-brand-section">
          <Link to="/" className="footer-logo">
            Naija<span className="gold-text">Jobs</span>
          </Link>
          <p className="footer-tagline">
            Building the economic bridge between exceptional Nigerian engineering talents and global industry leaders.
          </p>
        </div>

        <div className="footer-links-section">
          <h4>Navigation</h4>
          <nav className="footer-nav">
            <Link to="/">Home</Link>
            <Link to="/jobs">Browse Jobs</Link>
            <Link to="/post-job">Post a Job</Link>
            <Link to="/about">About Us</Link>
          </nav>
        </div>

        <div className="footer-categories">
          <h4>Get in Touch</h4>
           <ul>
              <li>Email: olaabdulsataar@gmail.com</li>
              <li>Phone: +234 8101344234</li>
              <li>Ibadan, Nigeria</li>
            </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container footer-bottom-content">
          <p>&copy; {currentYear} NaijaJobs. 3MTT Capstone Assignment Project.</p>
        </div>
      </div>
    </footer>
  );
}