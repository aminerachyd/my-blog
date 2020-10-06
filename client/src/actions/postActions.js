import axios from "../utils/axiosConfig";
import {
  GET_POSTS,
  GET_POST,
  POST_ERROR,
  UPDATE_POST,
  DELETE_POST,
  ADD_POST,
  SEARCH_POSTS,
} from "./types";

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
      payload: updatedPost,
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

export const deletePost = (id) => async (dispatch) => {
  try {
    await axios.delete(`/posts/${id}`);

    dispatch({
      type: DELETE_POST,
      payload: id,
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

export const addPost = (newPost) => async (dispatch) => {
  try {
    await axios.post(`/posts/`, newPost);

    dispatch({
      type: ADD_POST,
      payload: newPost,
    });
  } catch (error) {
    dispatch({
      type: POST_ERROR,
      payload: {
        //   todo fix error system
        msg: "server error",
        status: 500,
      },
    });
  }
};

export const dispatchSearch = (search) => (dispatch) => {
  try {
    dispatch({
      type: SEARCH_POSTS,
      payload: search,
    });
  } catch (error) {
    dispatch({
      type: POST_ERROR,
      payload: {
        //   todo fix error system
        msg: "server error",
        status: 500,
      },
    });
  }
};
