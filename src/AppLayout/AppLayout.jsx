import React from 'react';
import { Outlet } from 'react-router-dom'; 
import { Header } from '../Header/Header'; 
import { SideBar } from '../SideBar/SideBar'; 

const AppLayout = () => {
  return (
    <div style={{ display: 'flex' }}>
      <SideBar />
      
      {/* Main content area */}
      <div style={{ flex: 1 }}>
        <Header />
        <Outlet />
      </div>
    </div>
  );
};

export default AppLayout;
