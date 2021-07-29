import { combineReducers } from 'redux';
import auth from './authReducer';
import project from './projectReducer';
import department from './departmentReducer';
import employee from './employeeReducer';
import shift from './shiftReducer';

const appReducer = combineReducers({
    auth: auth,
    project: project,
    department: department,
    employee: employee,
    shift: shift
});

const rootReducer = (state, action) => {
    return appReducer(state, action);
};

export default rootReducer;
