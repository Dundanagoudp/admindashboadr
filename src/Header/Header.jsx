import React, { useContext } from "react";
import { FaSearch, FaTh, FaLanguage, FaBell, FaEnvelope, FaCog } from "react-icons/fa";
import { MdOutlineMenu, MdMenuOpen } from "react-icons/md";
import { myContext } from "../AppLayout/AppLayout";
import "../Header/Header.css";

export const Header = () => {
  // Accessing context values
  const { isToggleSidebar, setIsToggleSidebar } = useContext(myContext);

  return (
    <header className="header">
      {/* Toggle Button */}
      <button
        className="toggle"
        onClick={() => setIsToggleSidebar(!isToggleSidebar)}
      >
        {isToggleSidebar ? <MdOutlineMenu /> : <MdMenuOpen />}
      </button>

      {/* Search bar immediately after toggle */}
      <div className="search-bar">
        <input type="text" placeholder="Ctrl + K" />
        <FaSearch className="search-icon" />
      </div>

      {/* Header Icons */}
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
          <img src="/admin.png" alt="User" />
          <span>New Users</span>
        </div>
      </div>
    </header>
  );
};
