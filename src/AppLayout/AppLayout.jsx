import React, { createContext, useState } from "react";
import { Outlet } from "react-router-dom";
import { Header } from "../Header/Header";
import { SideBar } from "../SideBar/SideBar";

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

  return (
    <myContext.Provider value={values}>
      <div style={{ display: "flex", height: "100vh" }}>
        {/* Sidebar */}
        {!isHideSidebarAndHeader && (
          <div
            className={`sidebarWrapper ${isToggleSidebar ? "collapsed" : ""}`}
            style={{
              width: isToggleSidebar ? "0" : "250px",
              transition: "width 0.3s ease",
              overflow: "hidden",
            }}
          >
            <SideBar />
          </div>
        )}

        {/* Main Content Area */}
        <div style={{ flex: 1, overflow: "auto" }}>
          {!isHideSidebarAndHeader && <Header />}
          <Outlet />
        </div>
      </div>
    </myContext.Provider>
  );
};

export default AppLayout;
