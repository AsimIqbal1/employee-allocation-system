import ACTION_CONSTANTS from '../../constants/actionConstants';
import constants from '../../constants/stringConstants';

export const initialState = {
    userData: null,
    isLoading: false,
    error: null,
};

const authReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ACTION_CONSTANTS.SIGNIN_USER:
            return { ...state, isLoading: true };

        case ACTION_CONSTANTS.SIGNIN_USER_SUCCESS:
            return {
                ...state,
                isLoading: false,
                userData: payload,
                error: payload?.length ? null : constants.errorMessages.UNAUTORIZED.MESSAGE,
            };

        case ACTION_CONSTANTS.SIGNIN_USER_FAILURE:
            return { ...state, isLoading: false, error: payload };

        case ACTION_CONSTANTS.SIGNOUT_USER:
            return { ...state, isLoading: true };

        case ACTION_CONSTANTS.SIGNOUT_USER_SUCCESS:
            return {
                ...state,
                isLoading: false,
                userData: null,
                error: null,
            };

        case ACTION_CONSTANTS.SIGNOUT_USER_FAILURE:
            return { ...state, isLoading: false, error: payload };

        default:
            return state;
    }
};

export default authReducer;