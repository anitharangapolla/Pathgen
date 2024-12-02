import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';


const DashboardQuizPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCourse, setSelectedCourse] = useState(null);  // Track selected course
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
      navigate(`/quiz/${searchQuery.trim()}`);
    } else {
      alert('Please enter a course to search.');
    }
  };

  const handleCourseClick = (course) => {
    setSelectedCourse(course);  // Set the selected course
    navigate(`/quiz/${course}`); // Navigate to QuizPage for selected course
  };

  const handleLogout = () => {
    localStorage.removeItem('authToken');
    navigate('/');
  };

  return (
    <div
      style={{
        background: 'linear-gradient(to bottom, #6a11cb, #2575fc)',
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        color: '#fff',
      }}
    >
      {/* Logout Button */}
      <div style={{ position: 'absolute', top: '20px', right: '20px' }}>
        <button
          onClick={handleLogout}
          className="btn btn-dark btn-sm"
        >
          Logout
        </button>
      </div>

      {/* Header Section */}
      <div className="text-center mb-5" style={{ color: '#fff' }}>
        <h1 className="display-4 font-weight-bold" style={{ fontSize: '3rem', color: '#ffcc00' }}>
          PathGen AI
        </h1>
        <p className="lead" style={{ fontSize: '1.2rem', lineHeight: '1.5', color: '#fff' }}>
          Unlock the Future of Learning with PathGen AI! Start searching for courses and grow your knowledge today.
        </p>
      </div>

      {/* Search Bar */}
      <form
        onSubmit={handleSearch}
        className="d-flex justify-content-center mb-5"
        style={{ width: '90%', maxWidth: '700px' }}
      >
        <input
          type="text"
          placeholder="Search for a course..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="form-control w-75"
          style={{
            padding: '16px 25px',
            fontSize: '1.5rem',
            borderRadius: '50px',
            border: '2px solid #ffcc00',
            background: 'transparent',
            color: '#fff',
            marginRight: '10px',
            transition: 'all 0.3s ease-in-out',
          }}
        />
        <button
          type="submit"
          className="btn"
          style={{
            padding: '16px 25px',
            fontSize: '1.5rem',
            background: 'linear-gradient(90deg, #ff7a18, #ffcc00)',
            color: '#fff',
            border: 'none',
            borderRadius: '50px',
            cursor: 'pointer',
            fontWeight: 'bold',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.3)',
            transition: 'transform 0.2s, box-shadow 0.2s',
          }}
          onMouseOver={(e) => {
            e.target.style.transform = 'translateY(-3px)';
            e.target.style.boxShadow = '0 6px 8px rgba(0, 0, 0, 0.4)';
          }}
          onMouseOut={(e) => {
            e.target.style.transform = 'translateY(0)';
            e.target.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.3)';
          }}
        >
          Search
        </button>
      </form>

      {/* Categories Section */}
      <h2 className="text-center mb-4" style={{ fontSize: '2rem', color: '#ffcc00' }}>
        Categories
      </h2>

      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
        {categories.map((category) => (
          <div key={category.name} className="col">
            <div
              className="card shadow-lg"
              style={{
                background: '#ffffff20',
                borderRadius: '15px',
                padding: '20px',
                color: '#fff',
                transition: 'transform 0.3s, box-shadow 0.3s',
              }}
              onMouseOver={(e) => {
                e.target.style.transform = 'translateY(-5px)';
                e.target.style.boxShadow = '0 8px 16px rgba(0, 0, 0, 0.4)';
              }}
              onMouseOut={(e) => {
                e.target.style.transform = 'translateY(0)';
                e.target.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)';
              }}
            >
              <div className="card-body">
                <h5 className="card-title" style={{ fontSize: '1.5rem', color: '#ffcc00' }}>
                  {category.name}
                </h5>
                <ul className="list-group">
                  {category.courses.map((course) => (
                    <li
                      key={course}
                      className={`list-group-item list-group-item-action ${selectedCourse === course ? 'bg-warning text-dark' : ''}`}
                      onClick={() => handleCourseClick(course)}
                      style={{
                        cursor: 'pointer',
                        background: selectedCourse === course ? '#ffcc00' : 'transparent',
                        color: selectedCourse === course ? '#000' : '#fff',
                        border: '1px solid #ffcc00',
                        borderRadius: '10px',
                        marginBottom: '10px',
                        transition: 'all 0.3s ease-in-out',
                      }}
                    >
                      {course}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DashboardQuizPage;
