import axios from "../axiosConfig";
import { GET_POSTS, POST_ERROR } from "./types";

export const getPosts = () => async (dispatch) => {
  try {
    const res = await axios.get("/posts");

    dispatch({
      type: GET_POSTS,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: POST_ERROR,
      payload: {
        //   TODO fix error message
        msg: "Server Error",
        status: 500,
      },
    });
  }
};
