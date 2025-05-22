// src/components/Header.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Header.css';

const Header = ({ searchQuery, setSearchQuery }) => {
    const navigate = useNavigate();

    const handleSearch = (e) => {
        setSearchQuery(e.target.value);
        // You can navigate to the Home page or trigger search logic here if needed
        navigate('/home');
    };

    return (
        <header className="header">
            <div className="header__logo" onClick={() => navigate('/')}>
                MovieHub
            </div>
            <nav className="header__nav">
                <span onClick={() => navigate('/home')}>Home</span>
                <span onClick={() => navigate('/movies')}>Movies</span>
                <span onClick={() => navigate('/my-bookings')}>My Bookings</span>
                <span onClick={() => navigate('/profile')}>Profile</span>
            </nav>
            <div className="header__search">
                <input
                    type="text"
                    placeholder="Search..."
                    value={searchQuery}
                    onChange={handleSearch}
                />
            </div>
        </header>
    );
};

export default Header;
