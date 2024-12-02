import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { signup } from './api/api'; // Import the signup API function

const SignUpPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleSignUp = async (e) => {
    e.preventDefault();
    setError('');
    setMessage('');

    if (password !== confirmPassword) {
      setError('Passwords do not match!');
      return;
    }

    if (password.length < 6) {
      setError('Password must be at least 6 characters long.');
      return;
    }

    try {
      const token = await signup(name, email, password);
      localStorage.setItem('authToken', token);
      setMessage('Signup successful!');
      navigate('/dashboard');
    } catch (err) {
      setError(err.message || 'Signup failed. Please try again.');
    }
  };

  const styles = {
    page: {
      height: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      background: 'linear-gradient(to bottom, #6a11cb, #2575fc)',
      fontFamily: 'Arial, sans-serif',
      color: '#fff',
    },
    container: {
      backgroundColor: 'rgba(255, 255, 255, 0.1)',
      borderRadius: '10px',
      padding: '30px 40px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
      textAlign: 'center',
      width: '100%',
      maxWidth: '400px',
    },
    headline: {
      fontSize: '2rem',
      marginBottom: '20px',
      color: '#ffcc00',
    },
    input: {
      marginBottom: '15px',
      padding: '12px',
      width: '100%',
      borderRadius: '25px',
      border: 'none',
      outline: 'none',
      fontSize: '1rem',
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    },
    error: {
      color: '#ff4d4f',
      marginBottom: '15px',
    },
    message: {
      color: '#4caf50',
      marginBottom: '15px',
    },
    button: {
      padding: '12px 20px',
      fontSize: '1rem',
      background: 'linear-gradient(90deg, #ff7a18, #ffcc00)',
      color: '#fff',
      border: 'none',
      borderRadius: '25px',
      cursor: 'pointer',
      width: '100%',
      fontWeight: 'bold',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.3)',
      transition: 'transform 0.2s, box-shadow 0.2s',
    },
    buttonHover: {
      transform: 'translateY(-2px)',
      boxShadow: '0 6px 8px rgba(0, 0, 0, 0.4)',
    },
    footer: {
      marginTop: '20px',
      fontSize: '14px',
      color: '#fff',
    },
    link: {
      color: '#6a11cb',
      textDecoration: 'underline',
      fontWeight: 'bold',
      cursor: 'pointer',
    },
    linkHover: {
      color: '#fff',
    },
  };

  return (
    <div style={styles.page}>
      <div style={styles.container}>
        <h1 style={styles.headline}>Create an Account</h1>
        <form onSubmit={handleSignUp}>
          <input
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            style={styles.input}
          />
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
          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
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
            Sign Up
          </button>
        </form>
        <p style={styles.footer}>
          Already have an account?{' '}
          <Link
            to="/login"
            style={styles.link}
            onMouseOver={(e) => Object.assign(e.target.style, styles.linkHover)}
            onMouseOut={(e) => Object.assign(e.target.style, styles.link)}
          >
            Log in
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUpPage;
