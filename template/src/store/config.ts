import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import rootReducer from './reducers';

let configureStore: any = {};

if (process.env.NODE_ENV === 'production') configureStore = createStore(
  rootReducer, {}, compose(applyMiddleware(thunkMiddleware)));
else {
  const composeEnhancers: any = (window &&
    (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
  configureStore = createStore(rootReducer, {}, composeEnhancers(applyMiddleware(thunkMiddleware)));
}

export default configureStore;
