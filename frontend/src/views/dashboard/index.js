import React, { useEffect, useState } from 'react';

import dashboardItems from '../../constants/dashboardItems';
import { ProjectModel } from '../../models/projectModel';
import { getProjects } from '../../store/actions/projectAction';
import Departments from './sideComponents/departments';
import Employees from './sideComponents/employees';
import Projects from './sideComponents/projects';
import ProjectWiseEmployeeAllocation from './sideComponents/projectWiseEmployeeAllocation';
import SideMenu from './SideMenu';
import './styles.css'

function Dashboard(props) {
    const [currentComponent, setCurrentComponent] = useState(<ProjectWiseEmployeeAllocation/>)

    const onMenuItemClick = (item) => {
        switch (item) {
            case dashboardItems.PROJECT_ALLOCATION:
                setCurrentComponent(<ProjectWiseEmployeeAllocation/>)
                break;
            case dashboardItems.EMPLOYEES:
                setCurrentComponent(<Employees/>)
                break;
            case dashboardItems.PROJECTS:
                setCurrentComponent(<Projects/>)
                break;
            case dashboardItems.DEPARTMENTS:
                setCurrentComponent(<Departments/>)
                break;
            case dashboardItems.LOGOUT:
                break;
            default:
                break;
        }
    }

    return (
        <div className='main'>
            <SideMenu onMenuItemClick={onMenuItemClick} />
            <div className='component'>{currentComponent}</div>
        </div>
    );
}

export default Dashboard;