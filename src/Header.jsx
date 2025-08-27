import React from 'react';
import './Header.css'; 

const Header = () => {
  return (
    <header className="header">
        <div className="logo">
            WALMEM<span className="logo-red">ENGINEERING</span>
        </div>
        <nav className="nav-menu">
            <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#portfolio">Portfolio</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
    </header>
  );
};

export default Header;