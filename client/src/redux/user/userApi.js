import { API_URL } from "../api";
import {
  signInFailure,
  signUpSuccess,
  setRedirect,
  resetUser,
} from "./userSlice";
import { resetNote } from "../note/noteSlice";
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

export const login = async (dispatch, email, password) => {
  try {
    const { data } = await axios.post(`${API_URL}/user/login`, {
      email,
      password,
    });

    const { token, user } = data;
    console.log(token);
    localStorage.setItem("jwt", token);
    dispatch(signUpSuccess(user));
  } catch ({ response }) {
    const { data } = response;
    dispatch(signInFailure(data.message));
  }
};

export const auth = async (dispatch, token) => {
  try {
    const { data } = await axios.post(`${API_URL}/user/auth`, {
      token,
    });

    dispatch(signUpSuccess(data));
  } catch ({ response }) {}
};

export const logout = () => (dispatch) => {
  localStorage.removeItem("jwt");
  dispatch(resetUser());
  dispatch(resetNote());

  document.location.href = "/login";
};
