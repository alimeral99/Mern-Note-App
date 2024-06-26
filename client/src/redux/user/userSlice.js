import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentUser: null,
  error: null,
  succesRedirect: false,
};

const token = localStorage.getItem("jwt");

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
  },
});

export const { signUpSuccess, signInFailure, setRedirect } = userSlice.actions;

export default userSlice.reducer;
