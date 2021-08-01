import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";

import dashboardItems from '../../constants/dashboardItems';
import LOCAL_STORAGE from '../../constants/localStorageConstants';
import routes from '../../constants/routes';
import { getLocal } from '../../helpers/localStorage';
import { navigateTo } from '../../helpers/navigator';
import { signOutUser } from '../../store/actions/authAction';
import Departments from './sideComponents/departments';
import Employees from './sideComponents/employees';
import Projects from './sideComponents/projects';
import ProjectWiseEmployeeAllocation from './sideComponents/projectWiseEmployeeAllocation';
import SideMenu from './SideMenu';
import './styles.css'

function Dashboard(props) {
    const dispatch = useDispatch();
    const [currentComponent, setCurrentComponent] = useState(<ProjectWiseEmployeeAllocation/>)

    const userData = useSelector(state => state.auth.userData)

    useEffect(() => {
        if(!getLocal(LOCAL_STORAGE.IS_LOGGED_IN)){
            navigateTo(props.history, routes.LOGIN);
        }
    }, [userData])

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
                dispatch(signOutUser())
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