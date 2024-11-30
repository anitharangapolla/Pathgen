import React, { useState } from 'react';
import { login } from './api/api';
import { useNavigate, Link } from 'react-router-dom';

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(''); // Error state for displaying login errors
    const [message, setMessage] = useState(''); // Success message state
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        setError(''); // Reset error state
        setMessage(''); // Reset success message

        try {
            const token = await login(email, password); // API call to login function
            localStorage.setItem('authToken', token); // Store token in localStorage
            setMessage('Login successful!');
            navigate('/dashboard'); // Navigate to dashboard after successful login
        } catch (err) {
            setError(err.message || 'Login failed. Please try again.');
        }
    };

    const handleLogout = () => {
        localStorage.removeItem('authToken'); // Remove auth token
        alert('You have been logged out.');
        navigate('/'); // Navigate back to the login page
    };

    return (
        <div style={{ textAlign: 'center', padding: '50px', position: 'relative' }}>
            {/* Logout Button (Visible Only When Logged In) */}
            {localStorage.getItem('authToken') && (
                <button
                    onClick={handleLogout}
                    style={{
                        position: 'absolute',
                        top: '10px',
                        right: '10px',
                        padding: '10px 20px',
                        backgroundColor: '#dc3545',
                        color: '#fff',
                        border: 'none',
                        borderRadius: '5px',
                        cursor: 'pointer',
                    }}
                >
                    Logout
                </button>
            )}

            <h1>Login</h1>
            <form onSubmit={handleLogin} style={{ maxWidth: '300px', margin: 'auto' }}>
                {/* Email Input */}
                <input
                    type="text"
                    placeholder="Username/Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    style={{
                        marginBottom: '15px',
                        padding: '10px',
                        width: '100%',
                        border: '1px solid #ccc',
                        borderRadius: '5px',
                    }}
                />
                {/* Password Input */}
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    style={{
                        marginBottom: '15px',
                        padding: '10px',
                        width: '100%',
                        border: '1px solid #ccc',
                        borderRadius: '5px',
                    }}
                />
                {/* Error Message */}
                {error && (
                    <div
                        style={{
                            marginBottom: '10px',
                            color: 'red',
                            fontSize: '14px',
                            textAlign: 'center',
                        }}
                    >
                        {error}
                    </div>
                )}
                {/* Login Button */}
                <button
                    type="submit"
                    style={{
                        padding: '10px',
                        width: '100%',
                        backgroundColor: '#007bff',
                        color: '#fff',
                        border: 'none',
                        borderRadius: '5px',
                        cursor: 'pointer',
                    }}
                >
                    Login
                </button>
            </form>
            {/* Sign Up Link */}
            <p style={{ marginTop: '20px' }}>
                Don't have an account? <Link to="/signup">Sign Up</Link>
            </p>
            {/* Success Message */}
            {message && (
                <p
                    style={{
                        color: 'green',
                        marginTop: '10px',
                        fontSize: '14px',
                    }}
                >
                    {message}
                </p>
            )}
        </div>
    );
};

export default LoginPage;
