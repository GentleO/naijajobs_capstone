import React from 'react';
import { Link } from 'react-router-dom';
import './JobCard.css';

export default function JobCard({ job }) {
  return (
    <article className="job-card">
      <div className="card-main">
        <span className={`category-badge ${job.category.toLowerCase()}`}>{job.category}</span>
        <h3 className="job-title">{job.title}</h3>
        <p className="company-name">{job.company}</p>
        <div className="job-meta-row">
          <span>📍 {job.location}</span>
          <span>💰 ₦{Number(job.salary_min).toLocaleString()} - ₦{Number(job.salary_max).toLocaleString()}</span>
        </div>
      </div>
      <div className="card-footer-box">
        <span className="type-tag">{job.job_type}</span>
        <Link to={`/jobs/${job.id}`} className="view-details-btn">View Job</Link>
      </div>
    </article>
  );
}