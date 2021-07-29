import { request, success, failure } from './index';
import ACTION_CONSTANTS from '../../constants/actionConstants';
import Project from '../../services/api/project';

export function getProjects(params) {
    return async function (dispatch) {
        try {
            dispatch(request(ACTION_CONSTANTS.GET_PROJECTS, null));
            let res = await Project.getProjects(params);
            dispatch(success(ACTION_CONSTANTS.GET_PROJECTS_SUCCESS, res));
        } catch (error) {
            console.error('There is an error in get projects', error);
            dispatch(failure(ACTION_CONSTANTS.GET_PROJECTS_FAILURE, error));
        }
    };
}
