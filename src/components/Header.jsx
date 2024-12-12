import React from "react";
import { Link } from "react-router-dom"; // Assuming you're using react-router-dom
import { FaSearch, FaHeart, FaShoppingBag, FaUser } from "react-icons/fa"; // Import icons from react-icons

const Header = () => {
  return (
    <>
    <header className="header">
      {/* Logo */}
      <div className="logo">
        <Link to="/">
          <img src="/logo.svg" alt="Logo" className="logo-image" />
        </Link>
      </div>

      <h1>Logo</h1>

      {/* Icons and Language Selector */}
      <div className="icons">
        <FaSearch /> {/* Search Icon */}
        <FaHeart /> {/* Heart Icon (Wishlist) */}
        <FaShoppingBag /> {/* Shopping Bag Icon (Cart) */}
        <FaUser /> {/* User Icon (Profile) */}

        <select className="language-selector">
          <option value="en">English</option>
          <option value="es">Español</option>
          <option value="fr">Français</option>
        </select>
      </div>
      
     
    </header>
    
    </>
  );
};

export default Header;
