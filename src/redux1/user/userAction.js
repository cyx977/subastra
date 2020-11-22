import { actionTypes } from "./actionTypes";
export const setUserAction = (user) => ({
  type: actionTypes.set_current_user,
  payload: user,
});
