import {
  GET_ABOUT_PARAGRAPHS,
  GET_ABOUT_PROJECTS,
  UPDATE_ABOUT_PARAGRAPH,
  UPDATE_ABOUT_PROJECT,
  ADD_ABOUT_PARAGRAPH,
  ADD_ABOUT_PROJECT,
  DELETE_ABOUT_PARAGRAPH,
  DELETE_ABOUT_PROJECT,
  ABOUT_ERROR,
} from "../actions/types";

const initialState = {
  paragraphs: [],
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
        paragraphs: payload,
        loading: false,
      };
    case GET_ABOUT_PROJECTS:
      return {
        ...state,
        projects: payload,
        loading: false,
      };
    case ADD_ABOUT_PARAGRAPH:
      return {
        ...state,
        paragraphs: [...state.paragraphs, payload],
      };
    case UPDATE_ABOUT_PARAGRAPH:
      const { id, image, text, order } = payload;

      return {
        ...state,
        paragraphs: state.paragraphs.map((paragraph) =>
          paragraph.id === id ? { ...paragraph, image, text, order } : paragraph
        ),
        loading: false,
      };
    case DELETE_ABOUT_PARAGRAPH:
      return {
        ...state,
        paragraphs: state.paragraphs.filter(
          (paragraph) => paragraph.id !== payload
        ),
        loading: false,
      };
    case ADD_ABOUT_PROJECT:
      return {
        ...state,
        projects: [...state.projects, payload],
      };
    case DELETE_ABOUT_PROJECT:
      return {
        ...state,
        projects: state.projects.filter((project) => project.id !== payload),
        loading: false,
      };
    case UPDATE_ABOUT_PROJECT:
    case ABOUT_ERROR:
      return {
        ...state,
        error: payload,
        loading: false,
      };
    // TODO update state
    default:
      return state;
  }
}
