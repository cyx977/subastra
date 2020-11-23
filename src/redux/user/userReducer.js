import { userActionTypes } from "./actionTypes";
const initialState = {
  currentUser: null,
};

export const userReducer = (currentState = initialState, action) => {
  switch (action.type) {
    case userActionTypes.set_current_user:
      return { ...currentState, currentUser: action.payload };

    default:
      return currentState;
  }
};
