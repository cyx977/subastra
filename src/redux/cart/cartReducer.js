import { cartActionTypes } from "./actionTypes";

const initial_state = {
  hidden: true,
};

export const cartReducer = (state = initial_state, action) => {
  switch (action.type) {
    case cartActionTypes.toggleVisibility:
      return { ...state, hidden: !state.hidden };
    default:
      return state;
  }
};
