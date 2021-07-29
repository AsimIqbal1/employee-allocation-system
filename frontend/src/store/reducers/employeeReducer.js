import ACTION_CONSTANTS from '../../constants/actionConstants';

export const initialState = {
    employee: null,
    updateEmployee: null,
    isLoading: false,
    error: null,
};

const employeeReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ACTION_CONSTANTS.GET_EMPLOYEE:
            return { ...state, isLoading: true };

        case ACTION_CONSTANTS.GET_EMPLOYEE_SUCCESS:
            return {
                ...state,
                isLoading: false,
                employee: payload,
                error: null,
            };

        case ACTION_CONSTANTS.GET_EMPLOYEE_FAILURE:
            return { ...state, isLoading: false, error: payload };

        case ACTION_CONSTANTS.UPDATE_EMPLOYEE:
            return { ...state, isLoading: true };

        case ACTION_CONSTANTS.UPDATE_EMPLOYEE_SUCCESS:
            return {
                ...state,
                isLoading: false,
                updateEmployee: payload,
                error: null,
            };

        case ACTION_CONSTANTS.UPDATE_EMPLOYEE_FAILURE:
            return { ...state, isLoading: false, error: payload };

        default:
            return state;
    }
};

export default employeeReducer;