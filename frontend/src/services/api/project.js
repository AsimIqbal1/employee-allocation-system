import apiRoutes from '../../constants/apiRoutes';
import {apiClient} from './index';
import {handleError, handleResponse} from './responseHandlers';

class Project {
    async getProjects(params) {
      const url = apiRoutes.GET_PROJECTS;
      try {
        const options = {
          ...params
        };
  
        var res = await apiClient().get(url, options);
        return handleResponse(res);
      } catch (err) {
        throw handleError(err);
      }
    }
}

export default new Project();
