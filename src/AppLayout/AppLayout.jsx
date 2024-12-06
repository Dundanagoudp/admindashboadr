import React, { createContext, useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import { Header } from "../Header/Header";
import { SideBar } from "../SideBar/SideBar";
import "../AppLayout/AppLayout.css"; // Import the CSS file

// Creating the context
export const myContext = createContext();

const AppLayout = () => {
  const [isToggleSidebar, setIsToggleSidebar] = useState(false);
  const [isHideSidebarAndHeader, setIsHideSidebarAndHeader] = useState(false);

  const values = {
    isToggleSidebar,
    setIsToggleSidebar,
    isHideSidebarAndHeader,
    setIsHideSidebarAndHeader,
  };

  // Close sidebar function
  const closeSidebar = () => {
    setIsToggleSidebar(false);
  };

  // Close sidebar on window resize for mobile
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsToggleSidebar(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <myContext.Provider value={values}>
      <div className="layoutContainer">
        {/* Sidebar for larger screens */}
        {!isHideSidebarAndHeader && (
          <div
            className={`sidebarWrapper ${isToggleSidebar ? "collapsed" : ""}`}
            style={{
              width: isToggleSidebar ? "0" : "250px",
              display: window.innerWidth > 768 ? "block" : "none",
            }}
          >
            <SideBar />
          </div>
        )}

        {/* Sidebar as modal for mobile screens */}
        {isToggleSidebar && window.innerWidth <= 768 && (
          <div
            className={`sidebarModal ${isToggleSidebar ? "active" : ""}`}
            onClick={closeSidebar} // Close on overlay click
          >
            <div
              className={`sidebarContent ${isToggleSidebar ? "active" : ""}`}
              onClick={(e) => e.stopPropagation()} // Prevent close on sidebar click
            >
              <button
                className="closeSidebarButton"
                onClick={closeSidebar}
              >
                ×
              </button>
              <SideBar />
            </div>
          </div>
        )}

        {/* Main Content Area */}
        <div className="mainContent">
          {!isHideSidebarAndHeader && <Header />}
          <Outlet />
        </div>
      </div>
    </myContext.Provider>
  );
};

export default AppLayout;
