import { cartActionTypes } from "./actionTypes";

const initial_state = {
  hidden: true,
  cartItems: [],
};

export const cartReducer = (state = initial_state, action) => {
  switch (action.type) {
    case cartActionTypes.toggleVisibility:
      return { ...state, hidden: !state.hidden };

    case cartActionTypes.addItemToCart:
      const found = state.cartItems.find(
        (cartItem) => cartItem.id === action.payload.id
      );
      if (found) {
        let foundIndex = state.cartItems.indexOf(found);
        let updatedCartItem = state.cartItems[foundIndex];
        updatedCartItem.quantity++;
        state.cartItems[found] = updatedCartItem;

        return {
          ...state,
          cartItems: [...state.cartItems],
        };
      }
      return {
        ...state,
        cartItems: [...state.cartItems, { ...action.payload, quantity: 1 }],
      };

    default:
      return state;
  }
};
