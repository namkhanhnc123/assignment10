import React from 'react';
import { useDispatch } from 'react-redux';
import { clearToken } from '../features/authSlice';
import { useNavigate } from 'react-router-dom';
import './About.css';

function AboutPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(clearToken());
    navigate('/login');
  };

  return (
    <div className="about-container">
      <h1>About Us</h1>
      <p>Welcome to the About Page. Learn more about us here.</p>
      <button className="navigate-button" onClick={() => navigate('/')}>
        Go to Home
      </button>
      <button className="logout-button" onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
}

export default AboutPage;