import React, { useContext, useState } from "react";
import {
  FaSearch,
  FaTh,
  FaLanguage,
  FaBell,
  FaEnvelope,
  FaCog,
} from "react-icons/fa";
import { MdOutlineMenu, MdMenuOpen } from "react-icons/md";
import { myContext } from "../AppLayout/AppLayout";
import "../Header/Header.css";

export const Header = () => {
  // Accessing context values
  const { isToggleSidebar, setIsToggleSidebar } = useContext(myContext);

  // State for toggling the search popup
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <header className="header">
      {/* Toggle Button */}
      <button
        className="toggle"
        onClick={() => setIsToggleSidebar(!isToggleSidebar)}
      >
        {isToggleSidebar ? <MdOutlineMenu /> : <MdMenuOpen />}
      </button>

      {/* Search bar for desktop */}
      <div className={`search-bar ${isSearchOpen ? "mobile-visible" : "mobile-hidden"}`}>
        <input type="text" placeholder="Ctrl + K" />
        <FaSearch className="search-icon" />
      </div>

      {/* Header Icons */}
      <div className="header-icons">
        {/* Search icon for mobile */}
        <FaSearch
          className="search-icon mobile-search-icon"
          onClick={() => setIsSearchOpen(!isSearchOpen)}
        />
        <FaTh />
        <FaLanguage />
        <div className="notification">
          <FaBell />
          <span className="notification-badge">2</span>
        </div>
        <FaEnvelope />
        <FaCog />
        <div className="user-profile">
  <img src="/admin.png" alt="User" className="user-image" />
  <span className="user-name">New Users</span>
</div>

      </div>
    </header>
  );
};
