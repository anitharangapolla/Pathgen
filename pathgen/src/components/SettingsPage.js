import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SettingsPage = () => {
  const [theme, setTheme] = useState('light'); // Default theme
  const [language, setLanguage] = useState('English'); // Default language
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('authToken'); // Clear auth token
    alert('You have been logged out.');
    navigate('/'); // Redirect to home page
  };

  const handleThemeChange = (e) => {
    setTheme(e.target.value);
    alert(`Theme changed to ${e.target.value}`);
    // Add logic to apply theme here if needed
  };

  const handleLanguageChange = (e) => {
    setLanguage(e.target.value);
    alert(`Language changed to ${e.target.value}`);
    // Add logic to update app language here if needed
  };

  return (
    <div className="container mt-5">
      <h2>Settings</h2>
      <div
        className="settings-container"
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr',
          gap: '20px',
          marginTop: '30px',
        }}
      >
        {/* Theme Settings */}
        <div
          className="theme-settings"
          style={{
            backgroundColor: '#f8f9fa',
            borderRadius: '10px',
            boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
            padding: '20px',
          }}
        >
          <h3>Theme Settings</h3>
          <div style={{ marginBottom: '10px' }}>
            <label>
              <input
                type="radio"
                name="theme"
                value="light"
                checked={theme === 'light'}
                onChange={handleThemeChange}
              />{' '}
              Light Theme
            </label>
          </div>
          <div>
            <label>
              <input
                type="radio"
                name="theme"
                value="dark"
                checked={theme === 'dark'}
                onChange={handleThemeChange}
              />{' '}
              Dark Theme
            </label>
          </div>
        </div>

        {/* Language Settings */}
        <div
          className="language-settings"
          style={{
            backgroundColor: '#f8f9fa',
            borderRadius: '10px',
            boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
            padding: '20px',
          }}
        >
          <h3>Language Settings</h3>
          <select
            value={language}
            onChange={handleLanguageChange}
            style={{
              padding: '10px',
              fontSize: '16px',
              border: '1px solid #ccc',
              borderRadius: '5px',
              outline: 'none',
              width: '100%',
            }}
          >
            <option value="English">English</option>
            <option value="Spanish">Spanish</option>
            <option value="French">French</option>
            <option value="German">German</option>
          </select>
        </div>

        {/* Logout Button */}
        <div
          className="logout-section"
          style={{
            textAlign: 'center',
            backgroundColor: '#f8f9fa',
            borderRadius: '10px',
            boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
            padding: '20px',
          }}
        >
          <button
            onClick={handleLogout}
            style={{
              padding: '10px 20px',
              fontSize: '16px',
              backgroundColor: '#dc3545',
              color: '#fff',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.2)',
            }}
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;
