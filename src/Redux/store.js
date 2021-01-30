import { createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import logger from "redux-logger";
import rootReducers from './rootReducers'

const middlewares = [logger, thunkMiddleware];

const store = createStore(rootReducers, applyMiddleware(...middlewares));

export default store;
