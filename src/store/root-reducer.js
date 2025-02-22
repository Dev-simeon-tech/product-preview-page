import { combineReducers } from "redux";

import cartReducer from "./cart-store/cart.reducer";
const rootReducer = combineReducers({
  cart: cartReducer,
});

export default rootReducer;
