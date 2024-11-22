import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { setToken } from '../features/authSlice';
import './Login.css';

function LoginPage() {
  const [manualToken, setManualToken] = useState('');
  const dispatch = useDispatch();
  const storedToken = useSelector((state) => state.auth.token);

  const handleLogin = () => {
    const tokenToUse = manualToken || storedToken;
    if (!tokenToUse) {
      alert('Vui lòng nhập token hoặc đăng ký để lấy token.');
      return;
    }
    dispatch(setToken(tokenToUse));
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <input
        type="text"
        placeholder="Enter Token (Optional)"
        value={manualToken}
        onChange={(e) => setManualToken(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
      <p>Chưa có tài khoản? <Link to="/register">Đăng ký</Link></p>
    </div>
  );
}

export default LoginPage;