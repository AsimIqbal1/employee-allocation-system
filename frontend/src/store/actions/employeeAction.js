import { request, success, failure } from './index';
import ACTION_CONSTANTS from '../../constants/actionConstants';
import Employee from '../../services/api/employee';

export function getEmployee(params) {
    return async function (dispatch) {
        try {
            dispatch(request(ACTION_CONSTANTS.GET_EMPLOYEE, null));
            let res = await Employee.getEmployee(params);
            dispatch(success(ACTION_CONSTANTS.GET_EMPLOYEE_SUCCESS, res));
        } catch (error) {
            console.error('There is an error in get employees', error);
            dispatch(failure(ACTION_CONSTANTS.GET_EMPLOYEE_FAILURE, error));
        }
    };
}

export function updateEmployee(updateQuery) {
    return async function (dispatch) {
        try {
            dispatch(request(ACTION_CONSTANTS.UPDATE_EMPLOYEE, null));
            let res = await Employee.updateEmployee(updateQuery);
            dispatch(success(ACTION_CONSTANTS.UPDATE_EMPLOYEE_SUCCESS, res));
        } catch (error) {
            console.error('There is an error in update employees', error);
            dispatch(failure(ACTION_CONSTANTS.UPDATE_EMPLOYEE_FAILURE, error));
        }
    };
}
