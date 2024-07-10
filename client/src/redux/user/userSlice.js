import { createSlice } from "@reduxjs/toolkit";

const token = localStorage.getItem("jwt");

const initialState = {
  currentUser: null,
  error: null,
  succesRedirect: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    signUpSuccess: (state, action) => {
      state.currentUser = action.payload;
      state.currentUser.token = token;
    },
    signInFailure: (state, action) => {
      state.error = action.payload;
    },
    setRedirect: (state) => {
      state.succesRedirect = true;
    },
    resetUser: (state) => {
      state.succesRedirect = false;
      state.error = null;
      state.currentUser = null;
    },
  },
});

export const { signUpSuccess, signInFailure, setRedirect, resetUser } =
  userSlice.actions;

export default userSlice.reducer;
