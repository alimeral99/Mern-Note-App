import { API_URL } from "../api";
import { signInFailure, signUpSuccess, setRedirect } from "./userSlice";
import axios from "axios";

export const register = async (dispatch, userData) => {
  console.log(userData);
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

    dispatch(signUpSuccess(user));
    localStorage.setItem("jwt", token);
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
  document.location.href = "/login";
};
