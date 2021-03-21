import { combineReducers } from 'redux';
import * as reducers from './modules';

const rootReducer = combineReducers({ ...reducers });

export default rootReducer;
