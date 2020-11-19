import React from 'react';
import './LoginHeader.css';
import {Link} from 'react-router-dom';

function LoginHeader(){
    return(
        <section className="header">
            <a href="/" className="header-logo">Logo</a>
            <a href="/help" className="header-item">Help & Support</a>            
            <a href="/userLogin" className="header-item">Login/Sign-Up</a>
            <a href="/about" className="header-item">About Us</a>
            <a href="/" className="header-item">Home</a>      
        </section>
    )
}

export default LoginHeader;