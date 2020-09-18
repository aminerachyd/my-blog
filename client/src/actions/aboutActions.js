import { GET_ABOUT, ABOUT_ERROR } from "./types";
import axios from "../axiosConfig";

export const getAbout = () => async (dispatch) => {
  try {
    const res = await axios.get("/about/paragraphs");

    dispatch({
      type: GET_ABOUT,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: ABOUT_ERROR,
      payload: {
        //   TODO fix error system
        msg: "Server Error",
        status: 500,
      },
    });
  }
};
