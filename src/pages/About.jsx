import React from 'react';
import './About.css';

export default function About() {
  return (
    <main className="container page-spacing animate-fade-in">
      <div className="about-wrapper">
        <h2>Connecting Talent Across Nigeria</h2>
        <p className="about-intro">NaijaJobs is a localized job deployment matrix structured to bridge the communicative operational voids within the domestic technology ecosystems.</p>
        <div className="values-block">
          <div className="value-item">
            <h4>Premium Alignment</h4>
            <p>Vetted placements targeting institutional-grade tech firms, innovative local design clusters, and top entities.</p>
          </div>
          <div className="value-item">
            <h4>No Framework; Pure CSS Architecture</h4>
            <p>Created using custom vanilla styling to fulfill requirements without dependency overheads.</p>
          </div>
        </div>
      </div>
    </main>
  );
}