import React, { useState, useMemo } from 'react';
import JobCard from '../components/JobCard';
import './JobListings.css';

export default function JobListings({ jobs }) {
  const [search, setSearch] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');
  const categories = ['All', 'Tech', 'Design', 'Marketing', 'Finance', 'Legal'];

  const filteredJobs = useMemo(() => {
    return jobs.filter(job => {
      const matchesSearch = job.title.toLowerCase().includes(search.toLowerCase()) ||
                            job.company.toLowerCase().includes(search.toLowerCase());
      const matchesCategory = activeCategory === 'All' || job.category === activeCategory;
      return matchesSearch && matchesCategory;
    });
  }, [search, activeCategory, jobs]);

  return (
    <main className="container page-spacing animate-fade-in">
      <div className="search-banner">
        <h2>Explore Open Profiles</h2>
        <input 
          type="text" 
          placeholder="Search job title or company name..." 
          className="search-input"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="filter-button-group">
        {categories.map(cat => (
          <button 
            key={cat} 
            className={`filter-btn ${activeCategory === cat ? 'active-filter' : ''}`}
            onClick={() => setActiveCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="jobs-grid">
        {filteredJobs.length > 0 ? (
          filteredJobs.map(job => <JobCard key={job.id} job={job} />)
        ) : (
          <p className="no-results">No job listings found matching your exact search queries.</p>
        )}
      </div>
    </main>
  );
}