import React from 'react';
import { Link } from 'react-router-dom';
import JobCard from '../components/JobCard';
import './Home.css';

export default function Home({ jobs }) {
  const featured = jobs.slice(0, 3);

  return (
    <main className="animate-fade-in">
      <section className="hero-banner">
        <div className="container hero-content">
          <h1>Find the Finest Tech & Creative Talents in Nigeria</h1>
          <p>Connecting Nigerian enterprises with top-tier engineering, innovative, and strategic corporate minds.</p>
          <div className="hero-actions">
            <Link to="/jobs" className="cta-primary">Find Opportunities</Link>
            <Link to="/post-job" className="cta-secondary">Post a Vacancy</Link>
          </div>
        </div>
      </section>

      <section className="container home-featured-section">
        <div className="section-header">
          <h2>Featured Vacancies</h2>
          <Link to="/jobs" className="view-all-link">See All Postings →</Link>
        </div>
        <div className="jobs-grid">
          {featured.map(job => <JobCard key={job.id} job={job} />)}
        </div>
      </section>
    </main>
  );
}