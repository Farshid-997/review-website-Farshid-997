import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className="Header">
            <Link to="/services">Services</Link>
            <Link to="/features">Features</Link>
            <Link to="/blog">Blog</Link>

            <Link to="/about">About</Link>
        </div>
    );
};

export default Header;