import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import './Auth.css';

function Login() {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const userData = {
      email: formData.email,
      name: 'Shubhra Gupta',
      headline: 'Software Developer',
      profilePic: '/images/Screenshot 2025-04-01 004221.png'
    };
    login(userData);
    navigate('/profile-setup'); // Change this line
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
        <h1>Sign in</h1>
        <p>Stay updated on your professional world</p>
        
        <form onSubmit={handleSubmit}>
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
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
          />
          <button type="submit">Sign in</button>
        </form>

        <p className="auth__divider">or</p>

        <div className="auth__register">
          New to LinkedIn? <Link to="/register">Join now</Link>
        </div>
      </div>
    </div>
  );
}

export default Login;