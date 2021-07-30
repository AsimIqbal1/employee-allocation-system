import apiRoutes from '../../constants/apiRoutes';
import { apiClient } from './index';
import { handleError, handleResponse } from './responseHandlers';

class Employee {
    async getEmployee(employeeId) {
        const url = `${apiRoutes.GET_EMPLOYEE}/${employeeId}`;
        try {
            var res = await apiClient().get(url);
            return handleResponse(res);
        } catch (err) {
            throw handleError(err);
        }
    }

    async updateEmployee(employeeId, updateQuery) {
        const url = `${apiRoutes.UPDATE_EMPLOYEE}/${employeeId}`;
        try {
            const options = {
                ...updateQuery
            };

            var res = await apiClient().patch(url, options);
            return handleResponse(res);
        } catch (err) {
            throw handleError(err);
        }
    }
}

export default new Employee();
