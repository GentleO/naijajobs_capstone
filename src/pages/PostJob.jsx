// src/pages/PostJob.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './PostJob.css';

export default function PostJob({ onAddJob }) {
  const navigate = useNavigate();
  
  // Flattening state or using distinct updates stops initialization loop crashes
  const [title, setTitle] = useState('');
  const [company, setCompany] = useState('');
  const [location, setLocation] = useState('');
  const [salaryMin, setSalaryMin] = useState('');
  const [salaryMax, setSalaryMax] = useState('');
  const [jobType, setJobType] = useState('Full-time');
  const [category, setCategory] = useState('Tech');
  const [description, setDescription] = useState('');
  
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    let localErrors = {};
    
    if (!title.trim()) localErrors.title = "Position title is mandatory.";
    if (!company.trim()) localErrors.company = "Corporate name is mandatory.";
    if (!location.trim()) localErrors.location = "Job location is mandatory.";
    if (!description.trim()) localErrors.description = "Core role description cannot be empty.";
    if (!salaryMin || isNaN(salaryMin)) localErrors.salaryMin = "Enter valid base numerical salary.";
    if (!salaryMax || isNaN(salaryMax)) localErrors.salaryMax = "Enter valid ceiling numerical salary.";
    
    if (Object.keys(localErrors).length > 0) {
      setErrors(localErrors);
      return;
    }

    const newEntry = {
      id: Date.now(),
      title,
      company,
      location,
      salary_min: Number(salaryMin),
      salary_max: Number(salaryMax),
      job_type: jobType,
      category,
      description,
      is_active: true
    };
    
    onAddJob(newEntry);
    alert("Listing deployed successfully!");
    navigate('/jobs');
  };

  return (
    <main className="container max-form-width page-spacing animate-fade-in">
      <div className="form-wrapper">
        <h2>Post a Vacancy Node</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-field">
            <label>Job Title</label>
            <input type="text" value={title} onChange={e => setTitle(e.target.value)} />
            {errors.title && <span className="error-text">{errors.title}</span>}
          </div>

          <div className="two-column-input">
            <div className="form-field">
              <label>Company Name</label>
              <input type="text" value={company} onChange={e => setCompany(e.target.value)} />
              {errors.company && <span className="error-text">{errors.company}</span>}
            </div>
            <div className="form-field">
              <label>Location</label>
              <input type="text" placeholder="e.g. Lagos, Nigeria" value={location} onChange={e => setLocation(e.target.value)} />
              {errors.location && <span className="error-text">{errors.location}</span>}
            </div>
          </div>

          <div className="three-column-input">
            <div className="form-field">
              <label>Job Category</label>
              <select value={category} onChange={e => setCategory(e.target.value)}>
                <option value="Tech">Tech</option>
                <option value="Design">Design</option>
                <option value="Marketing">Marketing</option>
                <option value="Finance">Finance</option>
                <option value="Legal">Legal</option>
              </select>
            </div>
            <div className="form-field">
              <label>Minimum Salary (₦)</label>
              <input type="number" value={salaryMin} onChange={e => setSalaryMin(e.target.value)} />
              {errors.salaryMin && <span className="error-text">{errors.salaryMin}</span>}
            </div>
            <div className="form-field">
              <label>Maximum Salary (₦)</label>
              <input type="number" value={salaryMax} onChange={e => setSalaryMax(e.target.value)} />
              {errors.salaryMax && <span className="error-text">{errors.salaryMax}</span>}
            </div>
          </div>

          <div className="form-field">
            <label>Detailed Description</label>
            <textarea rows="6" value={description} onChange={e => setDescription(e.target.value)}></textarea>
            {errors.description && <span className="error-text">{errors.description}</span>}
          </div>

          <button type="submit" className="submit-form-btn">Publish Listing</button>
        </form>
      </div>
    </main>
  );
}