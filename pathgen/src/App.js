
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import HomePage from './components/HomePage';
import SignUpPage from './components/SignUpPage';
import LoginPage from './components/LoginPage'; 
import DashboardQuizPage from './components/DashboardQuizPage';
import NotFound from './components/NotFound';


function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/signup" element={<SignUpPage />} />
                <Route path="/login" element={<LoginPage />} /> 
                <Route path="/dashboard" element={<DashboardQuizPage />} /> 
                <Route path="/" element={<NotFound />} />
            </Routes>
        </Router>
    );

}

export default App;
