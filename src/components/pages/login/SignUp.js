import React, { useState } from 'react';

import './SignUp.css';

const SignUp = () => {
    const [formData, setFormData] = useState({
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
    });
  
    const handleChange = (e) => {
      setFormData((prev) => ({
        ...prev,
        [e.target.name]: e.target.value,
      }));
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
  
      // Basic validation
      if (formData.password !== formData.confirmPassword) {
        alert('Passwords do not match');
        return;
      }
  
      // Simulate form submission
      console.log('Signing up with:', formData);
  
      // TODO: Call your API here
    };
  
    return (
      <div className="signup-page">
        <form className="signup-form" onSubmit={handleSubmit}>
          <h2>Create Account</h2>
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />
          <button type="submit">Sign Up</button>
          <p>
            Already have an account? <a href="/login">Log In</a>
          </p>
        </form>
      </div>
    );
  };
  
  export default SignUp;