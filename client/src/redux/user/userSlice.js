import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentUser: null,
  userToken: null,
  error: null,
  successRedirect: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    signUpSuccess: (state, action) => {
      state.currentUser = action.payload;
    },
    signInFailure: (state, action) => {
      state.error = action.payload;
    },
    checkToken: (state, action) => {
      state.userToken = action.payload;
    },
    setRedirect: (state) => {
      state.successRedirect = true;
    },
    resetUser: (state) => {
      state.successRedirect = false;
      state.error = null;
      state.currentUser = null;
    },
  },
});

export const {
  signUpSuccess,
  signInFailure,
  setRedirect,
  checkToken,
  resetUser,
} = userSlice.actions;

export default userSlice.reducer;
