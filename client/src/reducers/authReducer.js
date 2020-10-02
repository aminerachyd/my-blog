import { LOGIN_USER, LOGOUT_USER, AUTH_ERROR } from "../actions/types";

const initialState = {
  isAuthenticated: null,
  user: null,
  loading: true,
  error: {},
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case LOGIN_USER:
      return {
        ...state,
        user: payload,
        isAuthenticated: true,
        loading: false,
      };
    case LOGOUT_USER:
      return {
        ...state,
        user: null,
        isAuthenticated: false,
        loading: false,
      };
    case AUTH_ERROR:
      return {
        ...state,
        error: payload,
      };
    default:
      return state;
  }
}
