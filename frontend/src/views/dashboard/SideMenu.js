import React from 'react';
import {
    ProSidebar,
    Menu,
    MenuItem,
    SidebarHeader,
    SidebarFooter,
    SidebarContent,
} from 'react-pro-sidebar';
import { FaTachometerAlt, FaSignOutAlt, FaHome, FaMoneyBillAlt, FaPersonBooth } from 'react-icons/fa';
import dashboardItems from '../../constants/dashboardItems';

import 'react-pro-sidebar/dist/css/styles.css';
import './SideMenuStyles.css'

const SideMenu = ({ onMenuItemClick }) => {
    return (
        <ProSidebar
            image={"/bg1.jpg"}
            style={{height: '100vh'}}
        >
            <SidebarHeader>
                <div className='header'>
                    DP WORLD
                </div>
            </SidebarHeader>

            <SidebarContent>
                <Menu iconShape="circle">
                    <MenuItem
                        className={'menuItem'}
                        icon={<FaTachometerAlt />}
                        onClick={()=>onMenuItemClick(dashboardItems.PROJECT_ALLOCATION)}
                    >
                        Project Wise -<br />Employee Allocation
                    </MenuItem>
                    <MenuItem
                        className={'menuItem'}
                        icon={<FaPersonBooth />}
                        onClick={()=>onMenuItemClick(dashboardItems.EMPLOYEES)}
                    >
                        Employees
                    </MenuItem>
                    <MenuItem
                        className={'menuItem'}
                        icon={<FaMoneyBillAlt />}
                        onClick={()=>onMenuItemClick(dashboardItems.PROJECTS)}
                    >
                        Projects
                    </MenuItem>
                    <MenuItem
                        className={'menuItem'}
                        icon={<FaHome />}
                        onClick={()=>onMenuItemClick(dashboardItems.DEPARTMENTS)}
                    >
                        Departmets
                    </MenuItem>
                    <MenuItem
                        className={'menuItem'}
                        icon={<FaSignOutAlt />}
                        onClick={()=>onMenuItemClick(dashboardItems.LOGOUT)}
                    >
                        Logout
                    </MenuItem>
                </Menu>
            </SidebarContent>

            <SidebarFooter style={{ textAlign: 'center' }}>
                <div className="sidebar-btn-wrapper footer" />
            </SidebarFooter>
        </ProSidebar>
    );
};

export default SideMenu;