import { createStore, combineReducers } from "redux";
import cartReducer from "../redux/cart/reducer";

const rootReducer = combineReducers({
  cart: cartReducer
});
const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENTION__ && window.__REDUX_DEVTOOLS_EXTENTION__()
);

export default store;
