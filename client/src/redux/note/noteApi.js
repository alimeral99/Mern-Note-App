import { API_URL } from "../api";
import {
  noteSuccess,
  setRedirect,
  noteDetailSuccess,
  noteFailure,
} from "./noteSlice";

import axios from "axios";

export const addNote = async (dispatch, contentNote, token) => {
  try {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    console.log(token);

    await axios.post(`${API_URL}/note/addNote`, contentNote, config);
    dispatch(setRedirect());
  } catch ({ response }) {}
};

export const getNote = async (dispatch, token) => {
  try {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    const { data } = await axios.get(`${API_URL}/note/all`, config);

    dispatch(noteSuccess(data));
  } catch ({ response }) {}
};

export const getNoteDetails = async (dispatch, id, token) => {
  try {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    const { data } = await axios.get(`${API_URL}/note/details/${id}`, config);

    dispatch(noteDetailSuccess(data));
  } catch ({ response }) {}
};

export const updateNote = async (dispatch, contentNote, token) => {
  try {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    const { data } = await axios.patch(
      `${API_URL}/note/update`,
      {
        contentNote,
      },
      config
    );
    dispatch(noteDetailSuccess(data));
  } catch ({ response }) {}
};
