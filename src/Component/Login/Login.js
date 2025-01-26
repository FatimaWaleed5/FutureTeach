import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Login.css';
import axios from 'axios';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

   
    if (username === '' || password === '') {
      setError('Please fill in all the fields');
    } else {
      try {
        
        const response = await axios.post(
          '/users/login/',
          {
            username: username,
            password: password,
          },
          {
            headers: {
              'Content-Type': 'application/json', 
            },
          }
        );

        const user = response.data;
        console.log(user);

        
        if (user && user.token) {
          localStorage.setItem('token', user.token);
          console.log('Token:', user.token);
        } else {
          setError('Invalid username or password');
        }
      } catch (error) {
        
        console.error('Login error:', error.response ? error.response.data : error.message);
        setError('Invalid login.');
      }
    }
  };

  return (
    <div className="container">
      <div className="login-section">
        <h2>Log in</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={handleUsernameChange}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={handlePasswordChange}
          />
          <button type="submit">Login</button>
        </form>
        {error && <p className="error-message">{error}</p>}
        <Link to='/Signup' className="next-button">
          <u>Create an account</u>
        </Link>
      </div>
      <div className="image-section">
        <div className="placeholder">
          <img src="/images/future.png" alt="Description" />
        </div>
      </div>
    </div>
  );
};

export default Login;