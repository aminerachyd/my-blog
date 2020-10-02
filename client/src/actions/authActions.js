import { LOGIN_USER, AUTH_ERROR, LOGOUT_USER } from "./types";
import { auth } from "../utils/firebaseConfig";

export const loginUser = (email, password) => async (dispatch) => {
  try {
    await auth.signInWithEmailAndPassword(email, password);

    dispatch({
      type: LOGIN_USER,
      payload: auth.currentUser,
    });
  } catch (error) {
    dispatch({
      type: AUTH_ERROR,
      payload: {
        //   TODO fix error system
        msg: "Server Error",
        status: 500,
      },
    });
  }
};

export const logoutUser = () => async (dispatch) => {
  try {
    await auth.signOut();

    dispatch({
      type: LOGOUT_USER,
    });
  } catch (error) {
    dispatch({
      type: AUTH_ERROR,
      payload: {
        //   TODO fix error system
        msg: "Server Error",
        status: 500,
      },
    });
  }
};
