import { combineReducers } from 'redux';
import auth from './authReducer';

const appReducer = combineReducers({
    auth: auth,
});

const rootReducer = (state, action) => {
    return appReducer(state, action);
};

export default rootReducer;
