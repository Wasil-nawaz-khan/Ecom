import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate authentication
    if (username === 'user' && password === 'password') {
      localStorage.setItem('auth', 'true');
      navigate('/');
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <div id="formdiv">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
          <input type="text" placeholder='Enter Username' value={username} onChange={(e) => setUsername(e.target.value)} />
        <br />        
          <input placeholder='Enter Password' type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <br />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
