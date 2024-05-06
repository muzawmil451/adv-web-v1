import React from 'react';
import './Header.css';  

function Header() {
    return (
        <div className="header">
            <img src="/pic-used.jpg" alt="Muhammad Muzammil" className="profile-pic" />
            <div className="header-info">
                <h1>Muhammad Muzammil</h1>
                <p>Email: F2020266451@umt.edu.pk</p>
                <p>Phone: +92 323 789 0089</p>
                <a href="https://linkedin.com/in/muzawmil" target="_blank" rel="noopener noreferrer">LinkedIn</a> | 
                <a href="https://github.com/muzawmil" target="_blank" rel="noopener noreferrer">GitHub</a>
            </div>
        </div>
    );
}

export default Header;
