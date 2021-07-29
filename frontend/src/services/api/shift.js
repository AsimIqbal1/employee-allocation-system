import apiRoutes from '../../constants/apiRoutes';
import {apiClient} from './index';
import {handleError, handleResponse} from './responseHandlers';

class Shift {
    async getShifts() {
      const url = apiRoutes.GET_SHIFTS;
      try {
        var res = await apiClient().get(url);
        return handleResponse(res);
      } catch (err) {
        throw handleError(err);
      }
    }
}

export default new Shift();
