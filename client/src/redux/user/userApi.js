import { API_URL } from "../api";
import { signInFailure, signUpSuccess, setRedirect } from "./userSlice";
import axios from "axios";

export const register = async (dispatch, userData) => {
  console.log(userData);
  try {
    const { data } = await axios.post(`${API_URL}/user/register`, userData);
    dispatch(setRedirect());
    console.log(data);
  } catch ({ response }) {
    const { data } = response;
    dispatch(signInFailure(data.message));
  }
};
