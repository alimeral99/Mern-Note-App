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
