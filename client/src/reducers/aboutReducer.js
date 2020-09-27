import {
  GET_ABOUT_PARAGRAPHS,
  GET_ABOUT_PROJECTS,
  UPDATE_ABOUT_PARAGRAPH,
  UPDATE_ABOUT_PROJECT,
  DELETE_ABOUT_PARAGRAPH,
  DELETE_ABOUT_PROJECT,
  ABOUT_ERROR,
} from "../actions/types";

const initialState = {
  about: [],
  projects: [],
  loading: true,
  error: {},
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_ABOUT_PARAGRAPHS:
      return {
        ...state,
        about: payload,
        loading: false,
      };
    case GET_ABOUT_PROJECTS:
      return {
        ...state,
        projects: payload,
        loading: false,
      };
    case DELETE_ABOUT_PARAGRAPH:
      return {
        ...state,
        about: state.about.filter((paragraph) => paragraph.id !== payload),
        loading: false,
      };
    case ABOUT_ERROR:
      return {
        ...state,
        error: payload,
        loading: false,
      };
    // TODO update state
    case UPDATE_ABOUT_PARAGRAPH:
    default:
      return state;
  }
}
