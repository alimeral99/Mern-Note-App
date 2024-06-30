import { API_URL } from "../api";

import { signInFailure, signInSuccess, setRedirect } from "./userSlice";
import axios from "axios";

export const register = async (dispatch, userData) => {
  try {
    const { data } = await axios.post(`${API_URL}/user/register`, userData);
    dispatch(setRedirect());
  } catch ({ response }) {
    const { data } = response;
    dispatch(signInFailure(data.message));
  }
};
