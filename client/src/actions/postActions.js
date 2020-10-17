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

import { fireErrorAlert, fireSuccessAlert } from "../utils/fireAlerts";
import swal from "@sweetalert/with-react";

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

    const confirm = await swal({
      title: "Save changes ?",
      text: "Are you sure you want to save these changes ?",
      icon: "warning",
      buttons: ["No wait", "Yes save changes"],
      dangerMode: true,
    });

    confirm &&
      (await axios.put(`/posts/${id}`, updatedPost, {
        headers: { token: idToken },
      }));

    dispatch({
      type: UPDATE_POST,
      payload: updatedPost,
    });

    fireSuccessAlert("Post updated successfully");
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

    const confirm = await swal({
      title: "Delete this post ?",
      text: "Are you sure you want to delete this post ? This cannot be undone",
      icon: "warning",
      buttons: ["No wait", "Yes delete it"],
      dangerMode: true,
    });
    confirm &&
      (await axios.delete(`/posts/${id}`, { headers: { token: idToken } }));

    dispatch({
      type: DELETE_POST,
      payload: id,
    });

    fireSuccessAlert("Post deleted successfully");
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

    const confirm = await swal({
      title: "Add this post ?",
      text: "Do you wish to add this post ?",
      icon: "warning",
      buttons: ["No wait", "Yes add it"],
      dangerMode: true,
    });
    confirm &&
      (await axios.post(`/posts/`, newPost, { headers: { token: idToken } }));

    dispatch({
      type: ADD_POST,
      payload: newPost,
    });

    fireSuccessAlert("Post added successfully");
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
