import { createStore, combineReducers } from "redux";

const rootReducer = combineReducers({});
const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENTION__ && window.__REDUX_DEVTOOLS_EXTENTION__()
);

export default store;
