import React from 'react';
import { useParams, Link } from 'react-router-dom';
import './JobDetail.css';

export default function JobDetail({ jobs }) {
  const { id } = useParams();
  const job = jobs.find(j => j.id === parseInt(id));

  if (!job) {
    return (
      <div className="container exception-view">
        <h2>Job Position Not Found</h2>
        <Link to="/jobs" className="return-link">Return to complete listings</Link>
      </div>
    );
  }

  return (
    <main className="container page-spacing animate-fade-in">
      <div className="detail-card">
        <header className="detail-header">
          <div>
            <span className="category-badge">{job.category}</span>
            <h1>{job.title}</h1>
            <p className="detail-company">{job.company} — <span>📍 {job.location}</span></p>
          </div>
          <div className="detail-meta">
            <span className="type-tag">{job.job_type}</span>
          </div>
        </header>

        <section className="detail-body">
          <h3>Job Profile Description</h3>
          <p className="description-text">{job.description}</p>
          
          <div className="compensation-tier">
            <h4>Estimated Remuneration</h4>
            <p>₦{Number(job.salary_min).toLocaleString()} - ₦{Number(job.salary_max).toLocaleString()} per annum</p>
          </div>

          <button className="apply-trigger-btn" onClick={() => alert(`Application successfully initialized for ${job.title}!`)}>
            Apply for this Position
          </button>
        </section>
      </div>
    </main>
  );
}