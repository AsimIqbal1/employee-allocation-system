import { request, success, failure } from './index';
import ACTION_CONSTANTS from '../../constants/actionConstants';
import Shift from '../../services/api/shift';

export function getShifts() {
    return async function (dispatch) {
        try {
            dispatch(request(ACTION_CONSTANTS.GET_SHIFTS, null));
            let res = await Shift.getShifts();
            dispatch(success(ACTION_CONSTANTS.GET_SHIFTS_SUCCESS, res));
        } catch (error) {
            console.error('There is an error in get shifts', error);
            dispatch(failure(ACTION_CONSTANTS.GET_SHIFTS_FAILURE, error));
        }
    };
}
