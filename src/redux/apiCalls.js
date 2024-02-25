import { loginFailure, loginStart, loginSuccess,logout } from "./userRedux";
import { publicRequest } from "../requestMethod";

export const login = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    const res = await publicRequest.post("/auth/login", user);
    dispatch(loginSuccess(res.data));
  } catch (err) {
    dispatch(loginFailure());
    console.log(err)
  }
};
export const log_out = async (dispatch, user) => {
  dispatch(logout());
  try {
    const res = await publicRequest.delete(`/api/users/:${user._id}`, user);
    dispatch(logout());
  } catch (err) {
    dispatch(logout());
    console.log(err)
  }
};