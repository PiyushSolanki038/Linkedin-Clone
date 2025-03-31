import React from 'react';
import './Jobs.css';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import NotificationsIcon from '@mui/icons-material/Notifications';

function Jobs() {
  const jobs = [
    {
      id: 1,
      title: "Software Engineer",
      company: "Tech Corp",
      location: "Mumbai, India",
      logo: "/images/company1.jpg"
    },
    {
      id: 2,
      title: "Frontend Developer",
      company: "Web Solutions",
      location: "Remote",
      logo: "/images/company2.jpg"
    }
  ];

  return (
    <div className="jobs">
      <div className="jobs__sidebar">
        <div className="jobs__options">
          <div className="option">
            <BookmarkIcon />
            <span>My Jobs</span>
          </div>
          <div className="option">
            <NotificationsIcon />
            <span>Job Alerts</span>
          </div>
        </div>
      </div>

      <div className="jobs__feed">
        <h2>Recommended for you</h2>
        {jobs.map(job => (
          <div key={job.id} className="job__card">
            <img src={job.logo} alt="" />
            <div className="job__info">
              <h3>{job.title}</h3>
              <p>{job.company}</p>
              <span>{job.location}</span>
            </div>
            <button>Apply</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Jobs;