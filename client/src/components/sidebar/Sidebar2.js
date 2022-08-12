import React from 'react';
import { ProSidebar, Menu, MenuItem, SubMenu, SidebarHeader, SidebarContent } from 'react-pro-sidebar';
import '../../style/SideBar2.css'
import {Link} from 'react-router-dom';


function Sidebar () {
    return (
    <div>
    <div className="container">
      <ul className="sidebar">
        <li>
          <span>
            <div className="fa fa-home"></div>
          </span>
          <span>Home</span>
        </li>
        <li>
          <span>
            <i className="Dashboard"></i>
          </span>
          <span>Dashboard</span>
        </li>
        <li>
          <span>
          <Link to="/UserProfile">
            <div className="Users"></div>
            </Link>
          </span>
          <span>User Profile</span>
        </li>
        <li>
          <span>
          <Link to="/period">
            <div className="Calendar"></div>
          Calendar
          </Link>
            </span>           
        </li>
        <li>
          <span>
            <div className="Settings"></div>
          </span>
          <span>Statistics</span>
        </li>
      </ul>

      <div className="content"></div>
    </div>
    </div>
    )
    };
    
    export default Sidebar

{/* 
    // <ProSidebar className='container'>
    //     <SidebarHeader> Dashboard</SidebarHeader>
    //     <SidebarContent>
    //         <Menu iconShape='column'>
    //         <MenuItem>User profile</MenuItem>
    //         <MenuItem>Daily Quiz</MenuItem>
    //         <MenuItem>Calendar/Cycle tracker</MenuItem>
    //         <MenuItem>User Stats</MenuItem>
    //     </Menu>
    //     </SidebarContent>
    // </ProSidebar> */}