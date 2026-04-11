import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
    const { pathname, hash } = useLocation();

    // Helper to determine active class
    const isActive = (targetPath, targetHash) => {
        if (targetHash) {
            return pathname === targetPath && hash === targetHash ? 'active' : '';
        }
        return pathname === targetPath && !hash ? 'active' : '';
    };

    return (
        <nav className="navbar">
            <Link to="/#home" className="logo">
                <img src="/assets/logo.svg" alt="Sri Sai Millets Hut Logo" className="brand-logo" />
                <span className="brand-text">SRI SAI MILLETS HUT</span>
            </Link>
            <ul className="nav-links">
                <li><Link to="/#home" className={isActive('/', '#home') || isActive('/', '')} id="nav-home">Home</Link></li>
                <li><Link to="/#about" className={isActive('/', '#about')} id="nav-about">About</Link></li>
                <li><Link to="/#menu" className={isActive('/', '#menu')} id="nav-menu">Menu</Link></li>
                <li><Link to="/our-story" className={isActive('/our-story')} id="nav-story">Our Story</Link></li>
                <li><Link to="/#location" className={isActive('/', '#location')} id="nav-location">Location</Link></li>
            </ul>
        </nav>
    );
};

export default Navbar;
