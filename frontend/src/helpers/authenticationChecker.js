import LOCAL_STORAGE from '../constants/localStorageConstants';
import { getLocal } from "./localStorage";

// mimiced the private route functionality
// Since no proper authentication is present from backend, this can imporve in other case when proper authentication is present.
export function isLoggedIn() {
    if (!getLocal(LOCAL_STORAGE.IS_LOGGED_IN)) {
        return false
    }
    return true
}