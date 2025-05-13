import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './ForgotPassword.css';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    // Replace with actual backend API call
    fetch('https://frontend.internetskimarketing.eu/wp-json/wp/v2/users/forgotpassword', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email }),
    })
      .then(res => res.json())
      .then(data => {
        setIsLoading(false);
        if (data.success) {
          setMessage('Password reset link has been sent to your email.');
        } else {
          setMessage('Something went wrong. Please check your email and try again.');
        }
      })
      .catch(() => {
        setIsLoading(false);
        setMessage('Server error. Please try again later.');
      });
  };

  return (
    <div className="container-fluid">
     <div className="form-wrapper">
  <div className="row">
        
        <div className="col-md-6 login-form">
          <div>
          <div>
            <h1>Lost your password?</h1>
            <p>Please enter your email address. You will receive a link to create a new password via email.</p>
          </div>
            <form onSubmit={handleSubmit} className={isLoading ? 'loading' : ''}>
              {message && <div className="info">{message}</div>}
              <label>Email Address</label>
              <input
                type="email"
                name="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button type="submit" disabled={isLoading}>
                {isLoading ? 'Sending...' : 'Send Reset Link'}
              </button>
              <p className="mt-3">
                <Link to="/login">Back to Login</Link>
              </p>
            </form>
          </div>
        </div>
      </div>
</div> 
    </div>
  );
};

export default ForgotPassword;
