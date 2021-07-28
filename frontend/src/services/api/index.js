import axios from 'axios';
import apiRoutes from '../../constants/apiRoutes';
import { isCompleteUrl } from '../../helpers/urlChecker';
import { store } from '../../store/store';

export const apiClient = () => {
    const defaultOptions = {
        timeout: 90000,
        headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + store.getState().auth.userToken,
        },
    };

    return {
        get: (url, options = {}) => {
            if (!isCompleteUrl(url)) {
                url = `${apiRoutes.BASE_URL}${url}`;
            }
            return axios.get(`${url}`, {
                headers: { ...defaultOptions.headers },
                params: { ...options },
            });
        },
        post: (url, data, options = {}) => {
            if (!isCompleteUrl(url)) {
                url = `${apiRoutes.BASE_URL}${url}`;
            }
            return axios.post(`${url}`, data, { ...defaultOptions, ...options });
        },
        put: (url, data, options = {}) => {
            if (!isCompleteUrl(url)) {
                url = `${apiRoutes.BASE_URL}${url}`;
            }
            return axios.put(`${url}`, data, { ...defaultOptions, ...options });
        },

        delete: (url, options = {}) => {
            if (!isCompleteUrl(url)) { url = `${apiRoutes.BASE_URL}${url}`; }
            return axios.delete(`${url}`, { ...defaultOptions, ...options });
        },
    };
};
