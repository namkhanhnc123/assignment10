import React from 'react';
import { useDispatch } from 'react-redux';
import { clearToken } from '../features/authSlice';
import { useNavigate } from 'react-router-dom';
import './Home.css';

function HomePage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(clearToken());
    navigate('/login');
  };

  return (
    <div className="home-container">
      <h1>Welcome to the Home Page</h1>
      <p>This is a protected page. Only logged-in users can access it.</p>
      <button className="navigate-button" onClick={() => navigate('/about')}>
        Go to About
      </button>
      <button className="logout-button" onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
}

export default HomePage;