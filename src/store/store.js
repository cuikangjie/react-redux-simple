import { createStore } from 'redux';
import rootReducer from  '../reducers/index';

const __DEV__ = process.env.REACT_APP_DEV_ === "true"

export default(initialState) => {

  if(__DEV__){
    return createStore(
      rootReducer,
      initialState,
      window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );
  }else{
    return createStore(
      rootReducer,
      initialState
    );
  }

}
