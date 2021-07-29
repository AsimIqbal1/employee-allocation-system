import apiRoutes from '../../constants/apiRoutes';
import {apiClient} from './index';
import {handleError, handleResponse} from './responseHandlers';

class Department {
    async getDepartments() {
      const url = apiRoutes.GET_DEPARTMENTS;
      try {
        var res = await apiClient().get(url);
        return handleResponse(res);
      } catch (err) {
        throw handleError(err);
      }
    }
}

export default new Department();
