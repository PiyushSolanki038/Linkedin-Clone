import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import './ProfileSetup.css';

function ProfileSetup() {
  const navigate = useNavigate();
  const { user, login } = useAuth();
  const [formData, setFormData] = useState({
    headline: '',
    location: '',
    industry: '',
    education: '',
    about: '',
    skills: '',
    experience: '',
    profilePic: user?.profilePic || ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData({
          ...formData,
          profilePic: reader.result
        });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedUserData = {
      ...user,
      ...formData
    };
    login(updatedUserData); // Update user data in context
    navigate('/');
  };

  return (
    <div className="profile-setup">
      <div className="profile-setup__container">
        <h1>Complete Your Profile</h1>
        <p>Help others know you better</p>

        <form onSubmit={handleSubmit}>
          <div className="profile-pic-section">
            <img 
              src={formData.profilePic || '/images/default-profile.png'} 
              alt="Profile" 
            />
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              id="profile-pic"
            />
            <label htmlFor="profile-pic">Change Photo</label>
          </div>

          <div className="form-group">
            <label>Professional Headline</label>
            <input
              type="text"
              name="headline"
              value={formData.headline}
              onChange={handleChange}
              placeholder="Ex: Software Engineer at Tech Company"
              required
            />
          </div>

          <div className="form-group">
            <label>Location</label>
            <input
              type="text"
              name="location"
              value={formData.location}
              onChange={handleChange}
              placeholder="Ex: Mumbai, India"
              required
            />
          </div>

          <div className="form-group">
            <label>Industry</label>
            <input
              type="text"
              name="industry"
              value={formData.industry}
              onChange={handleChange}
              placeholder="Ex: Information Technology"
              required
            />
          </div>

          <div className="form-group">
            <label>Education</label>
            <textarea
              name="education"
              value={formData.education}
              onChange={handleChange}
              placeholder="Ex: Bachelor's in Computer Science"
              required
            />
          </div>

          <div className="form-group">
            <label>About</label>
            <textarea
              name="about"
              value={formData.about}
              onChange={handleChange}
              placeholder="Tell us about yourself"
              required
            />
          </div>

          <div className="form-group">
            <label>Skills</label>
            <textarea
              name="skills"
              value={formData.skills}
              onChange={handleChange}
              placeholder="Ex: React, JavaScript, Node.js"
              required
            />
          </div>

          <div className="form-group">
            <label>Experience</label>
            <textarea
              name="experience"
              value={formData.experience}
              onChange={handleChange}
              placeholder="Share your work experience"
              required
            />
          </div>

          <button type="submit" className="submit-button">
            Complete Profile
          </button>
        </form>
      </div>
    </div>
  );
}

export default ProfileSetup;