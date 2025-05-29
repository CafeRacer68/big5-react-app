// src/components/NavBar.js
import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav style={{ background: "#001F3F", padding: "10px", position: "relative" }}>
      {/* Burger Icon */}
      <div
        onClick={() => setIsOpen(!isOpen)}
        style={{
          cursor: "pointer",
          width: "30px",
          height: "25px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        {[...Array(3)].map((_, i) => (
          <span
            key={i}
            style={{
              height: "4px",
              background: "yellow",
              borderRadius: "2px",
              width: "100%",
            }}
          />
        ))}
      </div>

      {/* Menu Links */}
      {isOpen && (
        <ul
          style={{
            listStyle: "none",
            padding: "10px",
            marginTop: "10px",
            backgroundColor: "#001F3F",
            position: "absolute",
            left: 0,
            top: "45px",
            width: "100%",
            boxShadow: "0px 4px 6px rgba(0,0,0,0.1)"
          }}
        >
          <li style={{ padding: "10px 0" }}>
            <Link to="/" style={{ color: "yellow", textDecoration: "none" }} onClick={() => setIsOpen(false)}>Home</Link>
          </li>
          <li style={{ padding: "10px 0" }}>
            <Link to="/resources" style={{ color: "yellow", textDecoration: "none" }} onClick={() => setIsOpen(false)}>Resources</Link>
          </li>
          <li style={{ padding: "10px 0" }}>
            <Link to="/urgent-help" style={{ color: "yellow", textDecoration: "none" }} onClick={() => setIsOpen(false)}>Get Urgent Help</Link>
          </li>
        </ul>
      )}
    </nav>
  );
}
