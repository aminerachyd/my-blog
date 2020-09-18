import { GET_ABOUT, ABOUT_ERROR } from "../actions/types";

const initialState = {
  about: {},
  loading: true,
  error: {},
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_ABOUT:
      return {
        ...state,
        about: payload,
        loading: false,
      };
    case ABOUT_ERROR:
      return {
        ...state,
        error: payload,
        loading: false,
      };
    default:
      return state;
  }
}
