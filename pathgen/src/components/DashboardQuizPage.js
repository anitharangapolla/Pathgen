import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './QuizPage.css';

const DashboardQuizPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
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
    navigate(`/quiz/${course}`); // Navigate to QuizPage for selected course
  };

  const handleLogout = () => {
    navigate('/'); // Navigate back to the home page
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
      <h2 className="text-center mb-3" style={{ backgroundColor: '#f8f9fa', margin: '90px', padding: '10px' }}>
        Categories
      </h2>
      <div className="category-grid">
        {categories.map((category) => (
          <div key={category.name} className="category-card">
            <h3 className="category-title">{category.name}</h3>
            <ul className="course-grid">
              {category.courses.map((course) => (
                <li
                  key={course}
                  className="course-item"
                  onClick={() => handleCourseClick(course)}
                >
                  {course}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Logout Button 
      <div style={{ textAlign: 'center', marginTop: '30px' }}>
        <button
          onClick={handleLogout}
          style={{
            padding: '10px 20px',
            fontSize: '16px',
            backgroundColor: '#000',
            color: '#fff',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
          }}
        >
          Logout
        </button>
      </div>*/}
    </div>
  );
};

export default DashboardQuizPage;
