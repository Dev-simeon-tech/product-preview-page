import { createSelector } from "reselect";

const selectCartReducer = (state) => state.cart;

export const selectCartItems = createSelector(
  [selectCartReducer],
  (cart) => cart.cartItems
);
export const selectCartQuantity = createSelector(
  [selectCartItems],
  (cartItems) => cartItems.reduce((acc, cartItem) => acc + cartItem.quantity, 0)
);
