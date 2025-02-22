import { CART_ACTION_TYPES } from "./cart.types";

const CART_INITIAL_STATE = {
  cartItems: [],
};

const cartReducer = (state = CART_INITIAL_STATE, action = {}) => {
  const { type, payload } = action;

  switch (type) {
    case CART_ACTION_TYPES.SET_CART_ITEMS:
      return { ...state, cartItems: payload };

    case CART_ACTION_TYPES.CLEAR_CART_ITEMS:
      return { ...state, cartItems: payload };

    case CART_ACTION_TYPES.UPDATE_CART_QUANTITY:
      return { ...state, cartItems: payload };

    default:
      return state;
  }
};

export default cartReducer;
