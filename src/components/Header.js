import React from 'react';
import './Header.css';  // Link to the CSS file
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header>
            <h1>Risshi Naavaal</h1>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/experience">Experience</Link>    
            </nav>
        </header>
    );
};

export default Header;