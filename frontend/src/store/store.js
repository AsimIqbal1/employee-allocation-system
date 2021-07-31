// redux store
import rootReducer from './reducers';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';

export const store = createStore(rootReducer, applyMiddleware(thunk));