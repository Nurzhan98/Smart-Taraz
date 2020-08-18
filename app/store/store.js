import { createStore, combineReducers } from 'redux';
import authReducer from '../reducers/reducer';

const rootReducer = combineReducers({
  authReducer: authReducer
})

const configureStore = () => createStore(rootReducer);

export default configureStore;