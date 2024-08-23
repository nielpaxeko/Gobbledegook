import React from 'react';
import { BrowserRouter as Router, Route, Routes, useParams } from 'react-router-dom';
import AuthPage from './pages/AuthPage.jsx';
import HomePage from "./pages/HomePage.jsx"
import Navbar from './components/navbar.jsx';
import UserProfile from "./pages/UserProfile.jsx"
import LandingPage from './pages/LandingPage.jsx';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/landing" element={<LandingPage />} />
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/" element={<AuthPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/profile/:username" element={<UserProfile />} />
      </Routes>
    </Router>
  );
};

export default App;