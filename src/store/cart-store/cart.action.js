import { CART_ACTION_TYPES } from "./cart.types";

const addItemCart = (cartItems, productToAdd, productQuantity) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === productToAdd.id
  );

  if (existingCartItem) return cartItems;

  return [
    ...cartItems,
    { ...productToAdd, quantity: productQuantity !== 0 ? productQuantity : 1 },
  ];
};

export const upadateItemQuantity = (cartItems, product, productQuantity) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === product.id
  );
  if (!existingCartItem) return cartItems;

  return cartItems.map((cartItem) =>
    cartItem.id === product.id
      ? {
          ...cartItem,
          quantity: productQuantity,
        }
      : cartItem
  );
};

const clearCartItem = (cartItems, cartItemToClear) => {
  return cartItems.filter((cartItem) => cartItem.id !== cartItemToClear.id);
};

export const addItemToCart = (cartItems, productToAdd, productQuantity) => {
  const newCartItems = addItemCart(cartItems, productToAdd, productQuantity);
  return { type: CART_ACTION_TYPES.SET_CART_ITEMS, payload: newCartItems };
};

export const updateQuantity = (cartItems, product, productQuantity) => {
  const newCartItems = upadateItemQuantity(cartItems, product, productQuantity);
  return {
    type: CART_ACTION_TYPES.UPDATE_CART_QUANTITY,
    payload: newCartItems,
  };
};

export const removeItemFromCart = (cartItems, itemToremove) => {
  const newCartItems = clearCartItem(cartItems, itemToremove);
  return { type: CART_ACTION_TYPES.CLEAR_CART_ITEMS, payload: newCartItems };
};
