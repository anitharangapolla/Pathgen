// src/components/LoginPage.js
import React, { useState } from 'react';
import { login } from './api/api'; // Import the login API function
import { useNavigate, Link } from 'react-router-dom';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');
    setMessage('');

    try {
      const token = await login(email, password);
      localStorage.setItem('authToken', token); // Save token in localStorage
      setMessage('Login successful!');
      navigate('/dashboard'); // Redirect to dashboard
    } catch (err) {
      setError(err.message || 'Login failed. Please try again.');
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('authToken');
    alert('You have been logged out.');
    navigate('/');
  };

  const styles = {
    page: {
      height: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      background: '#f9f9f9',
      fontFamily: 'Arial, sans-serif',
      color: '#333', // Black text
    },
    container: {
      backgroundColor: '#fff',
      borderRadius: '10px',
      padding: '30px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      textAlign: 'center',
      width: '100%',
      maxWidth: '400px',
    },
    headline: {
      fontSize: '1.8rem',
      marginBottom: '20px',
      fontWeight: 'bold',
      color: '#000', // Black headline text
    },
    input: {
      marginBottom: '15px',
      padding: '10px',
      width: '100%',
      borderRadius: '5px',
      border: '1px solid #ddd',
      fontSize: '1rem',
      outline: 'none',
    },
    error: {
      color: '#dc3545',
      fontSize: '14px',
      marginBottom: '15px',
    },
    message: {
      color: '#28a745',
      fontSize: '14px',
      marginBottom: '15px',
    },
    button: {
      padding: '10px 15px',
      width: '100%',
      background: '#000',
      color: '#fff',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
      fontWeight: 'bold',
      transition: 'background-color 0.2s',
    },
    buttonHover: {
      backgroundColor: '#333',
    },
    footer: {
      marginTop: '20px',
      fontSize: '14px',
      color: '#333',
    },
    link: {
      color: '#000',
      textDecoration: 'none',
      fontWeight: 'bold',
      transition: 'color 0.2s',
    },
    linkHover: {
      color: '#555',
    },
  };

  return (
    <div style={styles.page}>
      <div style={styles.container}>
        <h1 style={styles.headline}>Login</h1>
        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={styles.input}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={styles.input}
          />
          {error && <div style={styles.error}>{error}</div>}
          {message && <div style={styles.message}>{message}</div>}
          <button
            type="submit"
            style={styles.button}
            onMouseOver={(e) => Object.assign(e.target.style, styles.buttonHover)}
            onMouseOut={(e) => Object.assign(e.target.style, styles.button)}
          >
            Login
          </button>
        </form>
        <p style={styles.footer}>
          Don't have an account?{' '}
          <Link
            to="/signup"
            style={styles.link}
            onMouseOver={(e) => Object.assign(e.target.style, styles.linkHover)}
            onMouseOut={(e) => Object.assign(e.target.style, styles.link)}
          >
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
