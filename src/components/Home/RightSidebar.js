import React from 'react';
import InfoIcon from '@mui/icons-material/Info';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import { Link } from 'react-router-dom';

function RightSidebar() {
  const news = [
    {
      id: 1,
      title: "React 19 coming soon",
      time: "1d ago",
      readers: "85,432 readers"
    },
    {
      id: 2,
      title: "Tech layoffs continue in 2024",
      time: "2d ago",
      readers: "62,841 readers"
    },
    {
      id: 3,
      title: "AI transforms job market",
      time: "3d ago",
      readers: "45,231 readers"
    }
  ];

  const courses = [
    "Top Courses in 2024",
    "Excel Essential Training",
    "Python for Data Science",
    "Leadership Foundations"
  ];

  return (
    <div className="rightSidebar">
      <div className="news__section">
        <div className="news__header">
          <h2>LinkedIn News</h2>
          <InfoIcon />
        </div>
        <div className="news__list">
          {news.map(item => (
            <div key={item.id} className="news__item">
              <FiberManualRecordIcon className="bullet__point" />
              <div className="news__content">
                <h3>{item.title}</h3>
                <span>{item.time} • {item.readers}</span>
              </div>
            </div>
          ))}
        </div>
        <button className="show__more">Show more</button>
      </div>

      <div className="learning__section">
        <div className="learning__header">
          <h2>LinkedIn Learning</h2>
          <InfoIcon />
        </div>
        <div className="course__list">
          {courses.map((course, index) => (
            <div key={index} className="course__item">
              <p>{course}</p>
            </div>
          ))}
        </div>
        <Link to="/learning" className="view__all">
          View all recommendations
        </Link>
      </div>

      <div className="footer__links">
        <Link to="/about">About</Link>
        <Link to="/accessibility">Accessibility</Link>
        <Link to="/help">Help Center</Link>
        <Link to="/privacy">Privacy & Terms</Link>
        <Link to="/advertising">Advertising</Link>
        <Link to="/business">Business Services</Link>
        <p>LinkedIn Corporation © 2024</p>
      </div>
    </div>
  );
}

export default RightSidebar;