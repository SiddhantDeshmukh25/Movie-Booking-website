// src/components/Login.jsx
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css'; // Import your CSS for styling

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        const isLoggedIn = localStorage.getItem('isLoggedIn'); 
        if (isLoggedIn) {
            navigate('/home');
        }
    }, [navigate]);

    const handleSubmit = (e) => {
        e.preventDefault();

        // Hard-coded credentials for testing
        const validUsername = 'testuser';
        const validPassword = 'testpassword';

        if (username === validUsername && password === validPassword) {
            // Simulate successful login
            localStorage.setItem('token', 'dummy_token'); // Replace with an actual token when ready
            localStorage.setItem('isLoggedIn', true);
            navigate('/home');
        } else {
            // Handle login failure
            alert('Login failed! Please check your username and password.');
        }
    };

    return (
        <div className="login">
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default Login;
