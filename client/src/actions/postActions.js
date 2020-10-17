import axios from "../utils/axiosConfig";
import { auth } from "../utils/firebaseConfig";
import {
  GET_POSTS,
  GET_POST,
  POST_ERROR,
  UPDATE_POST,
  DELETE_POST,
  ADD_POST,
  SEARCH_POSTS,
} from "./types";

import { fireErrorAlert } from "../utils/fireAlerts";

export const getPosts = () => async (dispatch) => {
  try {
    const res = await axios.get("/posts");

    dispatch({
      type: GET_POSTS,
      payload: res.data,
    });
  } catch (error) {
    fireErrorAlert("Something went wrong");

    dispatch({
      type: POST_ERROR,
      payload: {
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
    fireErrorAlert("Something went wrong");

    dispatch({
      type: POST_ERROR,
      payload: {
        msg: "Server Error",
        status: 500,
      },
    });
  }
};

export const updatePost = (id, updatedPost) => async (dispatch) => {
  try {
    const idToken = await auth.currentUser.getIdToken(true);

    // TODO Add confirm here
    await axios.put(`/posts/${id}`, updatedPost, {
      headers: { token: idToken },
    });

    dispatch({
      type: UPDATE_POST,
      payload: updatedPost,
    });
  } catch (error) {
    fireErrorAlert("Something went wrong");

    dispatch({
      type: POST_ERROR,
      payload: {
        msg: "Server Error",
        status: 500,
      },
    });
  }
};

export const deletePost = (id) => async (dispatch) => {
  try {
    const idToken = await auth.currentUser.getIdToken(true);

    // TODO Add confirm here
    await axios.delete(`/posts/${id}`, { headers: { token: idToken } });

    dispatch({
      type: DELETE_POST,
      payload: id,
    });
  } catch (error) {
    fireErrorAlert("Something went wrong");

    dispatch({
      type: POST_ERROR,
      payload: {
        msg: "Server Error",
        status: 500,
      },
    });
  }
};

export const addPost = (newPost) => async (dispatch) => {
  try {
    const idToken = await auth.currentUser.getIdToken(true);

    await axios.post(`/posts/`, newPost, { headers: { token: idToken } });

    // TODO Add new post info
    dispatch({
      type: ADD_POST,
      payload: newPost,
    });
  } catch (error) {
    fireErrorAlert("Something went wrong");

    dispatch({
      type: POST_ERROR,
      payload: {
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
    fireErrorAlert("Something went wrong");

    dispatch({
      type: POST_ERROR,
      payload: {
        msg: "server error",
        status: 500,
      },
    });
  }
};
