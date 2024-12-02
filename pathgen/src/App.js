import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import SignUpPage from './components/SignUpPage';
import LoginPage from './components/LoginPage'; 
import DashboardQuizPage from './components/DashboardQuizPage'; 
import Quiz from './components/Quiz'; 
import path from './components/path';
import NotFound from './components/NotFound';
import './App.css';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/signup" element={<SignUpPage />} />
                <Route path="/login" element={<LoginPage />} /> 
                <Route path="/dashboard" element={<DashboardQuizPage />} />  
                <Route path="/quiz/:courseName" element={<Quiz />} /> 
                <Route path="/path/:courseName/:level" element={<path />} />
                {/* Catch-all route for undefined paths */}
                <Route path="*" element={<NotFound />} />
            </Routes>
        </Router>
    );
}

export default App;
