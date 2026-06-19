import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import JobListings from './pages/JobListings';
import JobDetail from './pages/JobDetail';
import PostJob from './pages/PostJob';
import About from './pages/About';
import { seedJobs } from './data/seedJobs';
import Footer from './components/Footer'
import './styles/App.css';

function MainLayout() {
  const [jobs, setJobs] = useState(() => {
    const saved = localStorage.getItem('naija_jobs_data');
    return saved ? JSON.parse(saved) : seedJobs;
  });

  useEffect(() => {
    localStorage.setItem('naija_jobs_data', JSON.stringify(jobs));
  }, [jobs]);

  const handleAddJob = (newJob) => {
    setJobs((prevJobs) => [newJob, ...prevJobs]);
  };

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home jobs={jobs} />} />
        <Route path="/jobs" element={<JobListings jobs={jobs} />} />
        <Route path="/jobs/:id" element={<JobDetail jobs={jobs} />} />
        <Route path="/post-job" element={<PostJob onAddJob={handleAddJob} />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </>
  );
}

export default function App() {
  return (
    <Router>
      <MainLayout />
    </Router>
  );
}