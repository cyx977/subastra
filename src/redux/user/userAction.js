import { userActionTypes } from "./actionTypes";
export const setUserAction = (user) => ({
  type: userActionTypes.set_current_user,
  payload: user,
});
