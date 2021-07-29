import { request, success, failure } from './index';
import ACTION_CONSTANTS from '../../constants/actionConstants';
import Department from '../../services/api/department';

export function getDepartments() {
    return async function (dispatch) {
        try {
            dispatch(request(ACTION_CONSTANTS.GET_DEPARTMENTS, null));
            let res = await Department.getDepartments();
            dispatch(success(ACTION_CONSTANTS.GET_DEPARTMENTS_SUCCESS, res));
        } catch (error) {
            console.error('There is an error in get departments', error);
            dispatch(failure(ACTION_CONSTANTS.GET_DEPARTMENTS_FAILURE, error));
        }
    };
}
