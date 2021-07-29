import apiRoutes from '../../constants/apiRoutes';
import { apiClient } from './index';
import { handleError, handleResponse } from './responseHandlers';

class Employee {
    async getEmployee(params) {
        const url = apiRoutes.GET_EMPLOYEE;
        try {
            const options = {
                ...params
            };

            var res = await apiClient().post(url, options);
            return handleResponse(res);
        } catch (err) {
            throw handleError(err);
        }
    }

    async updateEmployee(updateQuery) {
        const url = apiRoutes.UPDATE_EMPLOYEE;
        try {
            const options = {
                ...updateQuery
            };

            var res = await apiClient().post(url, options);
            return handleResponse(res);
        } catch (err) {
            throw handleError(err);
        }
    }
}

export default new Employee();
