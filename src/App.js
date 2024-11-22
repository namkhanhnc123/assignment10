import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from './components/Login';
import HomePage from './components/Home';
import AboutPage from './components/About';
import RegisterPage from './components/Register';
import { useSelector } from 'react-redux';

function App() {
  const token = useSelector((state) => state.auth.token);

  return (
    <Router>
      <Routes>
        <Route 
          path="/register" 
          element={!token ? <RegisterPage /> : <Navigate to="/" />} 
        />
        <Route
          path="/login"
          element={!token ? <LoginPage /> : <Navigate to="/" />}
        />
        <Route
          path="/"
          element={token ? <HomePage /> : <Navigate to="/login" />}
        />
        <Route
          path="/about"
          element={token ? <AboutPage /> : <Navigate to="/login" />}
        />
      </Routes>
    </Router>
  );
}

export default App;