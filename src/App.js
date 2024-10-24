// src/App.jsx
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import MovieDetails from './components/MovieDetails';
import Login from './components/Login';
import Header from './components/Header';

const App = () => {
    const [searchQuery, setSearchQuery] = useState('');

    return (
        <Router>
            <Header searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/home" element={<Home searchQuery={searchQuery} />} />
                <Route path="/movie/:id" element={<MovieDetails />} />
                {/* Add more routes as needed */}
            </Routes>
        </Router>
    );
};

export default App;
