import axios from "../axiosConfig";
import { GET_POSTS, GET_POST, POST_ERROR, UPDATE_POST } from "./types";

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
        //   TODO fix error system
        msg: "Server Error",
        status: 500,
      },
    });
  }
};

export const getPost = (id) => async (dispatch) => {
  try {
    const res = await axios.get(`/posts/${id}`);

    dispatch({
      type: GET_POST,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: POST_ERROR,
      payload: {
        //   TODO fix error system
        msg: "Server Error",
        status: 500,
      },
    });
  }
};

export const updatePost = (id, updatedPost) => async (dispatch) => {
  try {
    await axios.put(`/posts/${id}`, updatedPost);

    dispatch({
      type: UPDATE_POST,
    });
  } catch (error) {
    dispatch({
      type: POST_ERROR,
      payload: {
        //   TODO fix error system
        msg: "Server Error",
        status: 500,
      },
    });
  }
};
