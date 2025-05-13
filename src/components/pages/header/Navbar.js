import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
  <div className="navbar-inner">
    <div className="navbar-left">
      <Link to="/" className="navbar-logo" title="Home">
        <img src="logoflora.png" alt="Logo" />
      </Link>
    </div>

    <div className="nav-links">
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/blog">Blog</Link>
      <Link to="/shop">Shop</Link>
    </div>

    <div className="navbar-right">
    <Link to="/cart" className="nav-button" title="Go to Basket">
  <img src="basket_circle.png" alt="Basket" style={{ width: '50px', height: 'auto'}} />
</Link>
      <Link to="/login" className="nav-button" title="Log In"><img src="login_icon.png" alt="Login" style={{ width: '50px', height: 'auto'}} /></Link>
    </div>
  </div>
</nav>
  )
}

export default Navbar;
