import React, { useState } from "react";
import { FaAngleDown, FaAngleUp, FaChartBar, FaHome, FaFileInvoice, FaCogs, FaComments } from "react-icons/fa";
import { MdChat } from "react-icons/md";
import "../SideBar/SideBar.css";

export const SideBar = () => {
  const [submenuOpen, setSubmenuOpen] = useState(false);

  const toggleSubmenu = () => {
    setSubmenuOpen(!submenuOpen);
  };

  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <div className="logo">CHETAN</div>
      </div>
      <nav className="sidebar-menu">
        <div className="menu-section">Dashboard</div>
        <div className={`menu-item has-submenu ${submenuOpen ? "open" : ""}`}>
          <a href="#" onClick={toggleSubmenu}>
            <FaHome /> Dashboard {submenuOpen ? <FaAngleUp /> : <FaAngleDown />}
          </a>
          {submenuOpen && (
            <div className="submenu">
              <a href="#"><FaChartBar /> Default</a>
              <a href="#"><FaChartBar /> Analytics</a>
            </div>
          )}
        </div>
        
        <div className="menu-item">
          <a href="#">
            <FaFileInvoice /> Invoice
          </a>
        </div>
        <div className="menu-item new-item">
          <a href="#">
            <FaCogs /> Components <span className="badge">new</span>
          </a>
        </div>
        <div className="menu-section">Widgets</div>
        <div className="menu-item">
          <a href="#">
            <FaChartBar /> Statistics
          </a>
        </div>
      
        <div className="menu-item">
          <a href="#">
            <FaChartBar /> Chart
          </a>
        </div>
        <div className="menu-section">Applications</div>
        <div className="menu-item">
          <a href="#">
            <MdChat /> Chat
          </a>
        </div>
        <div className="menu-item">
          <a href="#">
            <MdChat /> Chat
          </a>
        </div>
        <div className="menu-item">
          <a href="#">
            <MdChat /> Chat
          </a>
        </div>
        <div className="menu-item">
          <a href="#">
            <MdChat /> Chat
          </a>
        </div>
        <div className="menu-item">
          <a href="#">
            <MdChat /> Chat
          </a>
        </div>
        <div className="menu-item">
          <a href="#">
            <MdChat /> Chat
          </a>
        </div>
        <div className="menu-item">
          <a href="#">
            <MdChat /> Chat
          </a>
        </div>
        <div className="menu-item">
          <a href="#">
            <MdChat /> Chat
          </a>
        </div>
      </nav>
      <div className="sidebar-footer">
        <div className="user-info">
          <img src="/admin.png" alt="User Avatar" />
          <div className="user-details">
            <div className="user-name">Chetan</div>
            <div className="user-role">Developer Team</div>
          </div>
        </div>
      </div>
    </aside>
  );
};

