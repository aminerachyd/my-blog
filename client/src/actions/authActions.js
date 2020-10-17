import { LOGIN_USER, AUTH_ERROR, LOGOUT_USER } from "./types";
import { auth } from "../utils/firebaseConfig";

import {
  fireSuccessAlert,
  fireErrorAlert,
  fireInfoAlert,
} from "../utils/fireAlerts";

export const loginUser = (email, password) => async (dispatch) => {
  try {
    await auth.signInWithEmailAndPassword(email, password);

    fireSuccessAlert("Logged in");

    dispatch({
      type: LOGIN_USER,
      payload: auth.currentUser,
    });
  } catch (error) {
    fireErrorAlert("Something went wrong");

    dispatch({
      type: AUTH_ERROR,
      payload: {
        msg: "Server Error",
        status: 500,
      },
    });
  }
};

export const logoutUser = () => async (dispatch) => {
  try {
    await auth.signOut();

    fireSuccessAlert("Logged out");

    dispatch({
      type: LOGOUT_USER,
    });
  } catch (error) {
    fireErrorAlert("Something went wrong");

    dispatch({
      type: AUTH_ERROR,
      payload: {
        msg: "Server Error",
        status: 500,
      },
    });
  }
};
