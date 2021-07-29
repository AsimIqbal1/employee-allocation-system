import ACTION_CONSTANTS from '../../constants/actionConstants';

export const initialState = {
    departments: null,
    isLoading: false,
    error: null,
};

const departmentReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ACTION_CONSTANTS.GET_DEPARTMENTS:
            return { ...state, isLoading: true };

        case ACTION_CONSTANTS.GET_DEPARTMENTS_SUCCESS:
            return {
                ...state,
                isLoading: false,
                departments: payload,
                error: null,
            };

        case ACTION_CONSTANTS.GET_DEPARTMENTS_FAILURE:
            return { ...state, isLoading: false, error: payload };

        default:
            return state;
    }
};

export default departmentReducer;