import {createStore, applyMiddleware, compose} from "redux";
import rootReducer from "../reducers/index";
import thunkMiddleware from "redux-thunk";
const __DEV__ = process.env.REACT_APP_DEV_ === "true";

export default initialState => {
  if (__DEV__) {
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    return createStore(rootReducer, initialState, composeEnhancers(applyMiddleware(thunkMiddleware)));
  } else {
    return createStore(rootReducer, initialState, applyMiddleware(thunkMiddleware));
  }
};
