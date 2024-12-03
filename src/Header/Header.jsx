import React from "react";
import { FaBars, FaSearch, FaTh, FaLanguage, FaBell, FaEnvelope, FaCog } from "react-icons/fa";
import "../Header/Header.css";

export const Header = () => {
  return (
    <header className="header">
      <div className="toggle">
        <FaBars />
      </div>
      {/* Search bar immediately after toggle */}
      <div className="search-bar">
        <input type="text" placeholder="Ctrl + K" />
        <FaSearch className="search-icon" />
      </div>
      <div className="header-icons">
        <FaTh />
        <FaLanguage />
        <div className="notification">
          <FaBell />
          <span className="notification-badge">2</span>
        </div>
        <FaEnvelope />
        <FaCog />
        <div className="user-profile">
          <img src="https://via.placeholder.com/40" alt="User" />
          <span>New Users</span>
        </div>
      </div>
    </header>
  );
};
