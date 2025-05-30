import React, { useState } from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <img src="/big5applogo.svg" alt="Big 5 Logo" />
        </Link>

        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </button>

        <div className={`menu ${menuOpen ? "open" : ""}`}>
          <Link to="/" onClick={() => setMenuOpen(false)}>
            Home
          </Link>
          <Link to="/resources" onClick={() => setMenuOpen(false)}>
            Big 5 Information
          </Link>
          <Link to="/urgent-help" onClick={() => setMenuOpen(false)}>
            Urgent Help
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
