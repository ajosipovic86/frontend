import React from "react";
import { useLocation } from "react-router-dom";
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { faFacebookF } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
    return(
        <footer class="text-center">
            <div class="icons">
            <a href="/">
            <FontAwesomeIcon icon={faCoffee} /></a>
            <a href="/"><i className="fa-brands fa-square-facebook"></i></a>
            <a href="/"><i className="fa-brands fa-square-instagram"></i></a>
            <a href="/"><i className="fa-brands fa-square-twitter"></i></a>
            <a href="/"><i className="fa-brands fa-linkedin"></i></a>
            </div>
            <p>Copyright ©2025 All rights reserved</p>
        </footer>
    );
};

export default Footer;