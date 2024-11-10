import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';  // For redirect after successful registration

const Register = () => {
  const [username, setUsername] = useState('');  // Added state for username
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);  // State to handle error messages
  const navigate = useNavigate();  // For redirecting after successful registration

  const handleRegister = async (e) => {
    e.preventDefault();  // Prevent default form submission

    // Make sure username, email, and password are not empty
    if (!username || !email || !password) {
      setError('Please fill out all fields');
      return;
    }

    try {
      const response = await fetch('https://localhost:8000/api/register/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, email, password }),  // Include username in the request body
      });

      if (response.ok) {
        const data = await response.json();
        
        // Handle successful registration
        if (data.success) {
          navigate('/login');  // Redirect to login page or any other page
        } else {
          setError(data.message || 'Registration failed');
        }
      } else {
        setError('Server error, please try again later.');
      }
    } catch (error) {
      setError('Network error, please try again.');
    }
  };

  return (
    <div className="register-container">
      <h2>Register</h2>
      {error && <p className="error-message">{error}</p>}  {/* Show error message if any */}

      <form onSubmit={handleRegister}>
        <label>Username:</label>
        <input
          type="text"
          name="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}  // Bind the username input
          required
        />

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

        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;
