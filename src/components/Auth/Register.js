import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import './Auth.css';

function Register() {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    headline: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const userData = {
      email: formData.email,
      name: `${formData.firstName} ${formData.lastName}`,
      headline: formData.headline || 'LinkedIn Member',
      profilePic: '/images/Screenshot 2025-04-01 003358.png'
    };
    login(userData);
    navigate('/');
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="auth">
      <img src="/images/Screenshot 2025-04-01 003358.png" alt="LinkedIn" />
      <div className="auth__content">
        <h1>Make the most of your professional life</h1>
        
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="firstName"
            placeholder="First name"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last name"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password (6+ characters)"
            value={formData.password}
            onChange={handleChange}
            required
            minLength="6"
          />
          <input
            type="text"
            name="headline"
            placeholder="Headline (optional)"
            value={formData.headline}
            onChange={handleChange}
          />
          <button type="submit">Join</button>
        </form>

        <div className="auth__login">
          Already on LinkedIn? <Link to="/login">Sign in</Link>
        </div>
      </div>
    </div>
  );
}

export default Register;