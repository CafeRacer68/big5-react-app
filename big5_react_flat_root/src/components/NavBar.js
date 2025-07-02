import React, { useState } from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo" onClick={() => setMenuOpen(false)}>
          <img src="/big5applogo.svg" alt="Big 5 Logo" />
        </Link>

        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </button>

        <div className={`menu ${menuOpen ? "open" : ""}`}>
          <Link to="/resources" onClick={() => setMenuOpen(false)}>
            Big 5 Information
          </Link>

          <Link to="/faqs" onClick={() => setMenuOpen(false)}>
            FAQs & Downloads
          </Link>

          <div className="dropdown">
            <button
              className="dropbtn"
              onClick={() => setAboutOpen(!aboutOpen)}
            >
              About Us ▾
            </button>
            <div className={`dropdown-content ${aboutOpen ? "show" : ""}`}>
              <Link
                to="/purpose"
                onClick={() => {
                  setMenuOpen(false);
                  setAboutOpen(false);
                }}
              >
                Purpose
              </Link>
              <Link
                to="/privacy"
                onClick={() => {
                  setMenuOpen(false);
                  setAboutOpen(false);
                }}
              >
                Privacy
              </Link>
              <Link
                to="/terms"
                onClick={() => {
                  setMenuOpen(false);
                  setAboutOpen(false);
                }}
              >
                Terms & Conditions
              </Link>
              <Link
                to="/faqs"
                onClick={() => {
                  setMenuOpen(false);
                  setAboutOpen(false);
                }}
              >
                FAQs
              </Link>
            </div>
          </div>

          <Link to="/urgent-help" onClick={() => setMenuOpen(false)}>
            Urgent Help
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
