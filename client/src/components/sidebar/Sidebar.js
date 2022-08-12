import React from 'react';
import { ProSidebar, Menu, MenuItem, SubMenu, SidebarHeader, SidebarContent } from 'react-pro-sidebar';
import '../../style/Sidebar.css'

function Sidebar () {
return (
<ProSidebar className='mfl-sidebar'>
    <SidebarHeader> Dashboard</SidebarHeader>
    <SidebarContent>
        <Menu iconShape='column'>
        <MenuItem>User profile</MenuItem>
        <MenuItem>Daily Quiz</MenuItem>
        <MenuItem>Calendar/Cycle tracker</MenuItem>
        <MenuItem>User Stats</MenuItem>
    </Menu>
    </SidebarContent>
</ProSidebar>
)
};

export default Sidebar