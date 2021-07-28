import apiRoutes from '../../constants/apiRoutes';
import {apiClient} from './index';
import {handleError, handleResponse} from './responseHandlers';

class Auth {
    async signInUser(creds) {
      const url = apiRoutes.LOGIN;
      try {
        const options = {
          ...creds
        };
  
        var res = await apiClient().get(url, options);
        return handleResponse(res);
      } catch (err) {
        throw handleError(err);
      }
    }
}

export default new Auth();
