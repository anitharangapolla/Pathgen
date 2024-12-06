import React, { useState, useEffect } from 'react';

// Mock function to simulate fetching recent activities from a backend or API
const fetchRecentActivities = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        'Completed HTML Basics Course',
        'Started learning JavaScript',
        'Completed React.js Quiz',
      ]);
    }, 1000); // Simulating a delay for fetching activities
  });
};

const ProfilePage = () => {
  const [userData, setUserData] = useState({
    userInfo: {},
    recentActivities: [],
  });
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch user data from localStorage or API
  useEffect(() => {
    const loadUserData = async () => {
      setIsLoading(true);
      try {
        // Get user info from localStorage (or replace with your authentication logic)
        const userInfo = JSON.parse(localStorage.getItem('userInfo'));

        if (!userInfo) {
          setError('User not logged in!');
          setIsLoading(false);
          return;
        }

        // Fetch recent activities (can be fetched from an API)
        const recentActivities = await fetchRecentActivities();

        setUserData({
          userInfo,
          recentActivities,
        });
      } catch (error) {
        setError('Error fetching user data');
      } finally {
        setIsLoading(false);
      }
    };

    loadUserData();
  }, []);

  if (isLoading) {
    return (
      <div className="d-flex justify-content-center my-5">
        <div className="spinner-border" role="status"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="alert alert-danger">
        {error}
      </div>
    );
  }

  return (
    <div className="container mt-5">
      <h2>User Profile</h2>
      <div
        className="profile-container"
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '20px',
          marginTop: '30px',
        }}
      >
        {/* User Information */}
        <div
          className="user-info"
          style={{
            backgroundColor: '#f8f9fa',
            borderRadius: '10px',
            boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
            padding: '20px',
          }}
        >
          <h3>User Information</h3>
          <p><strong>Name:</strong> {userData.userInfo.name}</p>
          <p><strong>Email:</strong> {userData.userInfo.email}</p>
          <p><strong>Joined:</strong> {userData.userInfo.joined}</p>
        </div>

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
              <input type="radio" name="theme" value="light" /> Light Theme
            </label>
          </div>
          <div>
            <label>
              <input type="radio" name="theme" value="dark" /> Dark Theme
            </label>
          </div>
        </div>

        {/* Recent Activity */}
        <div
          className="recent-activity"
          style={{
            backgroundColor: '#f8f9fa',
            borderRadius: '10px',
            boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
            padding: '20px',
            gridColumn: 'span 2',
          }}
        >
          <h3>Recent Activity</h3>
          <ul style={{ listStyleType: 'none', padding: '0' }}>
            {userData.recentActivities.map((activity, index) => (
              <li key={index} style={{ padding: '10px', borderBottom: '1px solid #ccc' }}>
                {activity}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
