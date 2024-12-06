import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaUserCircle } from 'react-icons/fa'; // Profile icon

const DashboardQuizPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const navigate = useNavigate();

  const categories = [
    { name: 'Full Stack Web Development', courses: ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js'] },
    { name: 'Data Science', courses: ['Python', 'Pandas', 'Machine Learning', 'Deep Learning'] },
    { name: 'Programming Languages', courses: ['Java', 'Python', 'C++', 'Go'] },
    { name: 'Databases', courses: ['MySQL', 'MongoDB', 'PostgreSQL'] },
  ];

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/quiz/${searchQuery.trim()}`); // Navigate to QuizPage with the search query
    } else {
      alert('Please enter a course to search.');
    }
  };

  const handleCourseClick = (course) => {
    navigate(`/quiz/${course}`); // Navigate to QuizPage for the selected course
  };

  const handleLogout = () => {
    navigate('/'); // Navigate back to the home page
  };

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  const handleProfile = () => {
    navigate('/profile'); // Navigate to Profile page
  };

  const handleSettings = () => {
    navigate('/settings'); // Navigate to Settings page
  };

  return (
    <div className="container mt-5">
      {/* Header Section */}
      <div style={{ textAlign: 'center', marginBottom: '50px' }}>
        <h1>Welcome to PathGen AI</h1>
        <p>
          Unlock the Future of Learning with PathGen AI! Start searching for courses and grow your knowledge today.
        </p>
      </div>

      {/* Profile Icon */}
      <div
        style={{
          position: 'absolute',
          top: '20px',
          right: '20px',
          cursor: 'pointer',
        }}
      >
        <FaUserCircle
          size={40}
          color="#000"
          onClick={toggleDropdown}
          style={{ cursor: 'pointer' }}
        />
        {isDropdownOpen && (
          <div
            style={{
              position: 'absolute',
              top: '50px',
              right: '0',
              backgroundColor: '#fff',
              boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
              borderRadius: '5px',
              overflow: 'hidden',
              zIndex: '1000',
              width: '150px',
              transition: 'transform 0.3s ease-out',
              transform: isDropdownOpen ? 'scale(1)' : 'scale(0)',
            }}
          >
            <ul
              style={{
                listStyleType: 'none',
                margin: 0,
                padding: '10px 0',
                textAlign: 'left',
                fontSize: '16px',
              }}
            >
              <li
                style={{
                  padding: '10px 20px',
                  cursor: 'pointer',
                  color: 'black',
                  transition: 'background-color 0.2s ease-in-out',
                }}
                onClick={handleProfile}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#f1f1f1'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
              >
                Profile
              </li>
              <li
                style={{
                  padding: '10px 20px',
                  cursor: 'pointer',
                  color: 'black',
                  transition: 'background-color 0.2s ease-in-out',
                }}
                onClick={handleSettings}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#f1f1f1'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
              >
                Settings
              </li>
              <li
                style={{
                  padding: '10px 20px',
                  cursor: 'pointer',
                  color: 'red',
                  transition: 'background-color 0.2s ease-in-out',
                }}
                onClick={handleLogout}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#f1f1f1'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
              >
                Logout
              </li>
            </ul>
          </div>
        )}
      </div>

      {/* Search Bar */}
      <form
        onSubmit={handleSearch}
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: '30px',
        }}
      >
        <input
          type="text"
          placeholder="Search for a course..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          style={{
            flex: '1',
            padding: '10px',
            fontSize: '16px',
            border: '1px solid #ccc',
            borderRadius: '5px 0 0 5px',
            outline: 'none',
            maxWidth: '500px',
          }}
        />
        <button
          type="submit"
          style={{
            padding: '10px 20px',
            fontSize: '16px',
            backgroundColor: '#000',
            color: '#fff',
            border: 'none',
            borderRadius: '0 5px 5px 0',
            cursor: 'pointer',
          }}
        >
          Search
        </button>
      </form>

      {/* Categories Section */}
      <h2 className="text-center mb-4">Categories</h2>
      <div
        className="category-grid"
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '20px',
        }}
      >
        {categories.map((category) => (
          <div
            key={category.name}
            className="category-card"
            style={{
              backgroundColor: '#f8f9fa',
              borderRadius: '10px',
              boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
              padding: '20px',
            }}
          >
            <h3 className="category-title" style={{ textAlign: 'center', marginBottom: '15px' }}>
              {category.name}
            </h3>
            <ul className="course-list" style={{ listStyleType: 'none', padding: 0 }}>
              {category.courses.map((course) => (
                <li
                  key={course}
                  className="course-item"
                  style={{
                    cursor: 'pointer',
                    padding: '10px',
                    margin: '5px 0',
                    backgroundColor: '#fff',
                    borderRadius: '5px',
                    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
                    transition: 'transform 0.2s, box-shadow 0.2s',
                  }}
                  onClick={() => handleCourseClick(course)}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'scale(1.03)';
                    e.currentTarget.style.boxShadow = '0 4px 10px rgba(0, 0, 0, 0.2)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'scale(1)';
                    e.currentTarget.style.boxShadow = '0 2px 5px rgba(0, 0, 0, 0.1)';
                  }}
                >
                  {course}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DashboardQuizPage;
