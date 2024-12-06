import React from 'react';
import './Home.css';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
    const navigate = useNavigate();

    const handleSignUpClick = () => {
        navigate('/signup');
    };

    const handleLoginClick = () => {
        navigate('/login');
    };

    return (
        <div className="home-container"> 
             {/* Background Video */}
             <video className="background-video" autoPlay muted loop>
                <source src="/background.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <div className="logo">
                {/*<img src="/pathgen.jpg" alt="Logo" />*/}
            </div>
            <h1 className="headline">PathGen AI</h1>
            <p className="subtitle">
                Unlock the Future of Learning with PathGen AI<br />
                Your Journey to Success Starts Here!
            </p>
            <div className="form-container">
                <input
                    type="email"
                    placeholder="Email Address"
                    className="email-input"
                />
                <button className="signup-button" onClick={handleSignUpClick}>
                    Sign Up
                </button>
                <button className="login-button" onClick={handleLoginClick}>
                    Login
                </button>
            </div>
        </div>
    );
};

export default HomePage;
