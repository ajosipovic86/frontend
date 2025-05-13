import React, {useEffect, useState} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import './Login.css'


const Login = () => {

   const navigate = useNavigate();
   
   useEffect( () => {
          if(localStorage.getItem ('token')){
            navigate('/');
          }
      }, [navigate])
   
    const [form, setForm] = useState({
    username: "",
    password: ""
  });

 
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setForm({
        ...form,
        [e.target.name]: e.target.value,
    });

  };

  const handleLogin = (e) => {
    e.preventDefault(); 
    setIsLoading(true);   
    fetch(
      'https://frontend.internetskimarketing.eu/backend/wp-json/jwt-auth/v1/token',{
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(form)
      }
    )
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      if(data?.code) {
        setIsLoading(false);
        setError(data.message || 'Your username or password are incorrect!');
      } else {
             
      localStorage.setItem('token', data.token);
      localStorage.setItem('username', data.user_display_name);
      navigate('/');
      window.location.reload();
    }
})
.catch ((error) => {
    setIsLoading(false);
    setError('Something went wrong! Please try again later.');
});
  };


  return (

    <div className="container-fluid">
	  	<div className="column">
      <div className="form-wrapper">
	  		<div className="col-md-6 login-form">
	  			<div><a href="index.html" className="me-auto">
	  				<img alt="Logo" src="logoflora.png" />
	  			</a>
	  				<h2>Welcome to Freude Flora!</h2>
	  				<h5 className="mb-4">Log in and explore additional option.</h5>
	  				<form  className={isLoading ? 'loading' : ''} onSubmit={handleLogin} >
                        {error && <div className="error">{error}</div>}
	  					<label>E-mail or phone number</label>
	  					<input 
                        type="text" 
                        name="username" 
                        value={form.username}
                        onChange={handleChange}  
                        required />
	  					<label>Password</label>
	  					<input 
                        type="password" 
                        name="password"
                        value={form.password} 
                        onChange={handleChange} 
                        required />
	  					<p className="text-end mb-4 mt-1">
              <Link to="/login/forgotpassword">Forgot Password?</Link>

	  					</p>
	  					<button type="submit" disabled={isLoading}>
                            {isLoading ? 'Signing In...' : 'Sign In'}</button>
	  					<p className="sign-up">Don’t have an account? <Link to="/login/signup">Sign Up</Link></p>
	  				</form>
	  			</div>
            </div>
            </div>
	  	</div>
    </div>
  );
};

export default Login;