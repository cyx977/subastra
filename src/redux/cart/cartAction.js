import { cartActionTypes } from "./actionTypes";
export const toggleVisibility = {
  type: cartActionTypes.toggleVisibility,
  payload: null,
};

export const addItemToCart = (cartItem) => ({
  type: cartActionTypes.addItemToCart,
  payload: cartItem,
});
