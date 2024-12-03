import React from "react";
import "../SideBar/SideBar.css";
import { AiFillDashboard } from "react-icons/ai";
import { BiCube, BiLineChart } from "react-icons/bi";
import { BsChatDots, BsCalendar, BsFillPieChartFill } from "react-icons/bs";
import { IoMdAnalytics } from "react-icons/io";
import { FaRegNewspaper } from "react-icons/fa";

export const SideBar = () => {
  return (
    <div className="sidebar">
      <div className="logo">
        <h1>Able<span className="pro">pro</span></h1>
      </div>

      <div className="menu">
        <p className="section-title">DASHBOARD</p>
        <ul>
          <li>
            <AiFillDashboard className="icon" />
            <span>Dashboard</span>
          </li>
          <li>
            <div className="submenu">
              <BiCube className="icon" />
              <span>Default</span>
            </div>
          </li>
          <li>
            <IoMdAnalytics className="icon" />
            <span>Analytics</span>
          </li>
          <li>
            <FaRegNewspaper className="icon" />
            <span>Components</span>
            <span className="new">new</span>
          </li>
        </ul>

        <p className="section-title">WIDGETS</p>
        <ul>
          <li>
            <BsFillPieChartFill className="icon" />
            <span>Statistics</span>
          </li>
          <li>
            <BiLineChart className="icon" />
            <span>Data</span>
          </li>
          <li>
            <BiLineChart className="icon" />
            <span>Chart</span>
          </li>
        </ul>

        <p className="section-title">APPLICATIONS</p>
        <ul>
          <li>
            <BsChatDots className="icon" />
            <span>Chat</span>
          </li>
          <li>
            <BsCalendar className="icon" />
            <span>Calendar</span>
          </li>
        </ul>
      </div>

      <div className="user-info">
        <img src="https://via.placeholder.com/40" alt="User" />
        <div>
          <p>JWT User</p>
          <span>UI/UX Designer</span>
        </div>
      </div>
    </div>
  );
};
