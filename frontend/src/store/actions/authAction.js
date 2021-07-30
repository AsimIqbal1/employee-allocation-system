import { request, success, failure } from './index';
import ACTION_CONSTANTS from '../../constants/actionConstants';
import Auth from '../../services/api/auth';
import { removeLocal } from '../../helpers/localStorage';
import LOCAL_STORAGE from '../../constants/localStorageConstants';

export function signInUser(creds) {
    return async function (dispatch) {
        try {
            dispatch(request(ACTION_CONSTANTS.SIGNIN_USER, null));
            let res = await Auth.signInUser(creds);
            dispatch(success(ACTION_CONSTANTS.SIGNIN_USER_SUCCESS, res));
        } catch (error) {
            console.error('There is an error in signInUser', error);
            dispatch(failure(ACTION_CONSTANTS.SIGNIN_USER_FAILURE, error));
        }
    };
}

export function signOutUser() {
    return async function (dispatch) {
        try {
            dispatch(request(ACTION_CONSTANTS.SIGNOUT_USER, null));
            removeLocal(LOCAL_STORAGE.IS_LOGGED_IN);
            dispatch(success(ACTION_CONSTANTS.SIGNOUT_USER_SUCCESS));
        } catch (error) {
            console.error('There is an error in signOut USer', error);
            dispatch(failure(ACTION_CONSTANTS.SIGNOUT_USER_FAILURE, error));
        }
    };
}

