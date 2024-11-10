import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';  // Use useNavigate for redirect

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);  // State to handle error messages
    const navigate = useNavigate();  // useNavigate hook for navigation

    const handleLogin = async (e) => {
        e.preventDefault();

        // Make sure email and password are not empty
        if (!email || !password) {
            setError('Please fill out all fields');
            return;
        }

        // Simulate API call or replace with real API request
        try {
            const response = await fetch('http://localhost:8000/api/login/', {  // Added the trailing slash here
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',  // Make sure the content type is JSON
                },
                body: JSON.stringify({ email, password }),  // Send email and password as JSON
            });

            // Check if the response is OK (status code 200-299)
            if (!response.ok) {
                throw new Error('Invalid login credentials');  // Handle bad status
            }

            // Parse the response as JSON
            const data = await response.json();

            // Handle successful login (replace '/home' with your actual redirect path)
            if (data.success) {
                navigate('/home');  // Navigate to home page after successful login
            } else {
                setError(data.message || 'Invalid login credentials');  // Display error if login failed
            }
        } catch (error) {
            setError(error.message);  // Handle fetch error (network issue, invalid JSON, etc.)
        }
    };

    return (
        <div className="login-container">
            <h2>Login</h2>
            {error && <p className="error-message">{error}</p>}  {/* Show error message if any */}

            <form onSubmit={handleLogin}>
                <label>Email:</label>
                <input
                    type="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />

                <label>Password:</label>
                <input
                    type="password"
                    name="password"
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
