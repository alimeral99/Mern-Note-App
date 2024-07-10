import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentNote: null,
  noteDetail: null,
  error: null,
  succesRedirect: false,
};

const noteSlice = createSlice({
  name: "note",
  initialState,
  reducers: {
    noteSuccess: (state, action) => {
      state.currentNote = action.payload;
      state.error = null;
    },
    noteFailure: (state, action) => {
      state.error = action.payload;
    },
    setRedirect: (state) => {
      state.succesRedirect = true;
    },
    noteDetailSuccess: (state, action) => {
      state.noteDetail = action.payload;
      state.error = null;
    },
    resetNote: (state) => {
      state.currentNote = null;
      state.succesRedirect = false;
      state.error = null;
    },
  },
});

export const {
  noteSuccess,
  noteFailure,
  setRedirect,
  noteDetailSuccess,
  resetNote,
} = noteSlice.actions;

export default noteSlice.reducer;
