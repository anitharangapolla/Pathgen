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
    setError(''); // Reset error state
    setMessage(''); // Reset success message

    // Client-side validation
    if (password !== confirmPassword) {
      setError('Passwords do not match!');
      return;
    }

    if (password.length < 6) {
      setError('Password must be at least 6 characters long.');
      return;
    }

    try {
      // Call signup API
      const token = await signup(name, email, password);
      localStorage.setItem('authToken', token); // Store token in localStorage
      setMessage('Signup successful!');
      
      // Navigate to dashboard
      navigate('/dashboard');
    } catch (err) {
      setError(err.message || 'Signup failed. Please try again.');
    }
  };

  return (
    <div style={{ textAlign: 'center', padding: '50px' }}>
      <h1>Sign Up</h1>
      <form onSubmit={handleSignUp} style={{ maxWidth: '300px', margin: 'auto' }}>
        {/* Name Input */}
        <input
          type="text"
          placeholder="Username"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          style={{ marginBottom: '15px', padding: '10px', width: '100%' }}
        />
        {/* Email Input */}
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          style={{ marginBottom: '15px', padding: '10px', width: '100%' }}
        />
        {/* Password Input */}
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          style={{ marginBottom: '15px', padding: '10px', width: '100%' }}
        />
        {/* Confirm Password Input */}
        <input
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
          style={{ marginBottom: '15px', padding: '10px', width: '100%' }}
        />
        {/* Error Message */}
        {error && <div style={{ color: 'red', marginBottom: '15px' }}>{error}</div>}
        {/* Success Message */}
        {message && <div style={{ color: 'green', marginBottom: '15px' }}>{message}</div>}
        {/* Submit Button */}
        <button type="submit" style={{ padding: '10px', width: '100%' }}>Sign Up</button>
      </form>
      {/* Login Link */}
      <p style={{ marginTop: '15px' }}>
        Already have an account? <Link to="/login">Login</Link>
      </p>
    </div>
  );
};

export default SignUpPage;
