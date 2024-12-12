import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li><Link to="/shop">Shop</Link></li>
        <li><Link to="/skills">Skills</Link></li>
        <li><Link to="/stories">Stories</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact-us">Contact Us</Link></li>
        <li><Link to="/capital">Capital</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
