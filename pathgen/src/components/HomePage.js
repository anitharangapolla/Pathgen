import React from 'react';
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
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        fontFamily: 'Arial, sans-serif',
        textAlign: 'center', 
       
        background: 'linear-gradient(to bottom, #6a11cb, #2575fc)', // Full-page gradient
        color: '#fff',
      }}
    > 
      <div
        style={{
          background: '#ffffff20', 
         
          // Semi-transparent container
          padding: '40px',
          borderRadius: '15px',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
          width: '90%',
          maxWidth: '500px',
        }}
      >
        <h1
          style={{
            fontSize: '3rem',
            fontWeight: 'bold',
            color: '#ffcc00',
            marginBottom: '20px',
          }}
        >
          PathGen AI
        </h1>
        <p
          style={{
            fontSize: '1.2rem',
            lineHeight: '1.5',
            marginBottom: '30px',
            color: '#fff',
          }}
        >
          Unlock the Future of Learning. <br />
          Your Journey to Success Starts Here!
        </p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
          <button
            onClick={handleSignUpClick}
            style={{
              padding: '12px 20px',
              fontSize: '1.2rem',
              background: 'linear-gradient(90deg, #ff7a18, #ffcc00)',
              color: '#fff',
              border: 'none',
              borderRadius: '25px',
              cursor: 'pointer',
              fontWeight: 'bold',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.3)',
              transition: 'transform 0.2s, box-shadow 0.2s',
            }}
            onMouseOver={(e) => {
              e.target.style.transform = 'translateY(-2px)';
              e.target.style.boxShadow = '0 6px 8px rgba(0, 0, 0, 0.4)';
            }}
            onMouseOut={(e) => {
              e.target.style.transform = 'translateY(0)';
              e.target.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.3)';
            }}
          >
            Get Started
          </button>
          <button
            onClick={handleLoginClick}
            style={{
              padding: '12px 20px',
              fontSize: '1.2rem',
              background: 'transparent',
              color: '#ffcc00',
              border: '2px solid #ffcc00',
              borderRadius: '25px',
              cursor: 'pointer',
              fontWeight: 'bold',
              transition: 'background-color 0.2s, color 0.2s',
            }}
            onMouseOver={(e) => {
              e.target.style.backgroundColor = '#ffcc00';
              e.target.style.color = '#000';
            }}
            onMouseOut={(e) => {
              e.target.style.backgroundColor = 'transparent';
              e.target.style.color = '#ffcc00';
            }}
          >
            Log In
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
