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
} from "./types";
import axios from "../utils/axiosConfig";

export const getAboutParagraphs = () => async (dispatch) => {
  try {
    const res = await axios.get("/about/paragraphs");

    dispatch({
      type: GET_ABOUT_PARAGRAPHS,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: ABOUT_ERROR,
      payload: {
        //   TODO fix error system
        msg: "Server Error",
        status: 500,
      },
    });
  }
};

export const updateAboutParagraph = (id, updatedParagraph) => async (
  dispatch
) => {
  try {
    const res = await axios.put(`/about/paragraphs/${id}`, updatedParagraph);

    const { order, text, image } = res.data.paragraph;

    dispatch({
      type: UPDATE_ABOUT_PARAGRAPH,
      payload: { id, order, text, image },
    });

    return { id, order, text, image };
  } catch (error) {
    console.log(error);
    dispatch({
      type: ABOUT_ERROR,
      payload: {
        //   TODO fix error system
        msg: error,
        status: 500,
      },
    });
  }
};

export const addAboutParagraph = (newParagraph) => async (dispatch) => {
  try {
    const res = await axios.post(`/about/paragraphs`, newParagraph);

    const { id, order, text, image } = res.data.paragraph;

    dispatch({
      type: ADD_ABOUT_PARAGRAPH,
      payload: { id, order, text, image },
    });

    return { id, order, text, image };
  } catch (error) {
    dispatch({
      type: ABOUT_ERROR,
      payload: {
        //   TODO fix error system
        msg: "Server Error",
        status: 500,
      },
    });
  }
};

export const deleteAboutParagraph = (id) => async (dispatch) => {
  try {
    if (id !== "1") await axios.delete(`/about/paragraphs/${id}`);

    dispatch({
      type: DELETE_ABOUT_PARAGRAPH,
      payload: id,
    });
  } catch (error) {
    dispatch({
      type: ABOUT_ERROR,
      payload: {
        //   TODO fix error system
        msg: "Server Error",
        status: 500,
      },
    });
  }
};

export const getAboutProjects = () => async (dispatch) => {
  try {
    const res = await axios.get("/about/projects");

    dispatch({
      type: GET_ABOUT_PROJECTS,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: ABOUT_ERROR,
      payload: {
        //   TODO fix error system
        msg: "Server Error",
        status: 500,
      },
    });
  }
};

export const updateAboutProject = (id, updatedProject) => async (dispatch) => {
  try {
    const res = await axios.put(`/about/projects/${id}`, updatedProject);

    const { image, title, description, link } = res.data.project;

    dispatch({
      type: UPDATE_ABOUT_PROJECT,
      payload: { id, image, title, description, link },
    });

    return { id, image, title, description, link };
  } catch (error) {
    dispatch({
      type: ABOUT_ERROR,
      payload: {
        //   TODO fix error system
        msg: "Server Error",
        status: 500,
      },
    });
  }
};

export const addAboutProject = (newProject) => async (dispatch) => {
  try {
    const res = await axios.post(`/about/projects/`, newProject);

    const { id, title, description, image, link } = res.data.project;
    dispatch({
      type: ADD_ABOUT_PROJECT,
      payload: { id, title, description, image, link },
    });

    return { id, title, description, image, link };
  } catch (error) {
    dispatch({
      type: ABOUT_ERROR,
      payload: {
        //   TODO fix error system
        msg: "Server Error",
        status: 500,
      },
    });
  }
};

export const deleteAboutProject = (id) => async (dispatch) => {
  try {
    if (id !== "1") await axios.delete(`/about/projects/${id}`);

    dispatch({
      type: DELETE_ABOUT_PROJECT,
      payload: id,
    });
  } catch (error) {
    dispatch({
      type: ABOUT_ERROR,
      payload: {
        //   TODO fix error system
        msg: "Server Error",
        status: 500,
      },
    });
  }
};
