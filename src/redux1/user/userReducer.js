const initialState = {
  currentUser: null,
};

export const userReducer = (currentState = initialState, action) => {
  switch (action.type) {
    case "test":
      return { ...currentState, currentUser: action.payload };

    default:
      return currentState;
  }
};
