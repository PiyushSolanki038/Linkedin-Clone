import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PersonIcon from '@mui/icons-material/Person';
import { useAuth } from '../../context/AuthContext';
import EditIcon from '@mui/icons-material/Edit';
import LogoutIcon from '@mui/icons-material/Logout';
import './Profile.css';

function Profile() {
  const navigate = useNavigate();
  const { user, login, logout } = useAuth();
  const [isEditing, setIsEditing] = useState(false);
  const [editData, setEditData] = useState({
    name: user?.name || '',
    headline: user?.headline || '',
    location: user?.location || '',
    about: user?.about || '',
    experience: user?.experience || '',
    education: user?.education || '',
    skills: user?.skills || ''
  });

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleChange = (e) => {
    setEditData({
      ...editData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    login({ ...user, ...editData });
    setIsEditing(false);
  };

  const handleSignOut = () => {
    logout();
    navigate('/login');
  };

  return (
    <div className="profile">
      <div className="profile__top">
        <div 
          className="profile__background"
          style={{
            backgroundImage: `url('/images/backgrounds/profile-background.jpg')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          <div className="background-overlay"></div>
        </div>
        <div className="profile__info">
          <PersonIcon className="profile__pic" />
          <div className="profile__details">
            {isEditing ? (
              <form onSubmit={handleSubmit} className="edit-form">
                <input
                  type="text"
                  name="name"
                  value={editData.name}
                  onChange={handleChange}
                  placeholder="Name"
                />
                <input
                  type="text"
                  name="headline"
                  value={editData.headline}
                  onChange={handleChange}
                  placeholder="Headline"
                />
                <input
                  type="text"
                  name="location"
                  value={editData.location}
                  onChange={handleChange}
                  placeholder="Location"
                />
                <button type="submit" className="save-button">Save</button>
                <button type="button" onClick={() => setIsEditing(false)} className="cancel-button">Cancel</button>
              </form>
            ) : (
              <div className="profile__header">
                <div>
                  <h1>{user?.name}</h1>
                  <h2>{user?.headline}</h2>
                  <p>{user?.location}</p>
                </div>
                <div className="profile__actions">
                  <button className="edit-button" onClick={handleEdit}>
                    <EditIcon />
                    Edit Profile
                  </button>
                  <button className="signout-button" onClick={handleSignOut}>
                    <LogoutIcon />
                    Sign Out
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="profile__sections">
        <section className="profile__about">
          <div className="section__header">
            <h3>About</h3>
            {!isEditing && (
              <button className="edit-button small" onClick={handleEdit}>
                <EditIcon />
              </button>
            )}
          </div>
          {isEditing ? (
            <textarea
              name="about"
              value={editData.about}
              onChange={handleChange}
              placeholder="Write about yourself"
            />
          ) : (
            <p>{user?.about || 'Add a summary about yourself'}</p>
          )}
        </section>

        <section className="profile__experience">
          <div className="section__header">
            <h3>Experience</h3>
            {!isEditing && (
              <button className="edit-button small" onClick={handleEdit}>
                <EditIcon />
              </button>
            )}
          </div>
          {isEditing ? (
            <textarea
              name="experience"
              value={editData.experience}
              onChange={handleChange}
              placeholder="Add your experience"
            />
          ) : (
            <p>{user?.experience || 'Add your experience'}</p>
          )}
        </section>

        <section className="profile__education">
          <div className="section__header">
            <h3>Education</h3>
            {!isEditing && (
              <button className="edit-button small" onClick={handleEdit}>
                <EditIcon />
              </button>
            )}
          </div>
          {isEditing ? (
            <textarea
              name="education"
              value={editData.education}
              onChange={handleChange}
              placeholder="Add your education"
            />
          ) : (
            <p>{user?.education || 'Add your education'}</p>
          )}
        </section>

        <section className="profile__skills">
          <div className="section__header">
            <h3>Skills</h3>
            {!isEditing && (
              <button className="edit-button small" onClick={handleEdit}>
                <EditIcon />
              </button>
            )}
          </div>
          {isEditing ? (
            <textarea
              name="skills"
              value={editData.skills}
              onChange={handleChange}
              placeholder="Add your skills (comma separated)"
            />
          ) : (
            <div className="skills__list">
              {user?.skills?.split(',').map((skill, index) => (
                <div key={index} className="skill__item">{skill.trim()}</div>
              ))}
            </div>
          )}
        </section>
      </div>
    </div>
  );
}

export default Profile;