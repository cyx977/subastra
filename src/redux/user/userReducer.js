const initialState = {
  currentUser: null,
};
export const userReducer = (currentState = initialState, action) => {
  switch (action.type) {
    case "set_current_user":
      return {
        ...currentState,
        currentUser: action.payLoad,
      };

    default:
      return currentState;
  }
};
