import ACTION_CONSTANTS from '../../constants/actionConstants';

export const initialState = {
    shifts: null,
    isLoading: false,
    error: null,
};

const shiftReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ACTION_CONSTANTS.GET_SHIFTS:
            return { ...state, isLoading: true };

        case ACTION_CONSTANTS.GET_SHIFTS_SUCCESS:
            return {
                ...state,
                isLoading: false,
                shifts: payload,
                error: null,
            };

        case ACTION_CONSTANTS.GET_SHIFTS_FAILURE:
            return { ...state, isLoading: false, error: payload };

        default:
            return state;
    }
};

export default shiftReducer;