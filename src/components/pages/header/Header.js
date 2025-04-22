import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import './Header.css';
import "../gutenberg.css"; 

const Header = () => {

    const [username, setUserName] = useState(null);

    useEffect( () => {
        const user = localStorage.getItem('username');
        if(user)  setUserName(user);
    }, []);

    const location = useLocation();
    console.log(location.pathname);
    if(location.pathname === '/login' || location.pathname === '/register') return null;

    const logout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('username');
        window.location.reload();
      }

    return(
        <header>
        <div className="container">
            <div className="d-flex">
                <Link to="/"><img src="/logoflora.png" alt="neki opis slike" height="62" /></Link>
                <div className="mx-auto nav links">
                <Link to="/blog" >Blog</Link>
                <Link to="/contact" >Contact</Link>
                <Link to="/about" >About</Link>
                <Link to="/login" >Login</Link>
                </div>

            </div>
        </div>
        {username ? (
            <button className="btn">Welcome, {username}</button>
         ) : ( 
            <Link to="/login" className="btn">Prijava</Link>
        )}
        
    </header>
     
    );
};

export default Header;