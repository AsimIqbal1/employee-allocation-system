import ACTION_CONSTANTS from '../../constants/actionConstants';

export const initialState = {
    projects: null,
    isLoading: false,
    error: null,
};

const projectReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ACTION_CONSTANTS.GET_PROJECTS:
            return { ...state, isLoading: true };

        case ACTION_CONSTANTS.GET_PROJECTS_SUCCESS:
            return {
                ...state,
                isLoading: false,
                projects: payload,
                error: null,
            };

        case ACTION_CONSTANTS.GET_PROJECTS_FAILURE:
            return { ...state, isLoading: false, error: payload };

        default:
            return state;
    }
};

export default projectReducer;