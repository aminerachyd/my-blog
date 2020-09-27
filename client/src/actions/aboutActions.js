import {
  GET_ABOUT_PARAGRAPHS,
  GET_ABOUT_PROJECTS,
  UPDATE_ABOUT_PARAGRAPH,
  UPDATE_ABOUT_PROJECT,
  DELETE_ABOUT_PARAGRAPH,
  DELETE_ABOUT_PROJECT,
  ABOUT_ERROR,
} from "./types";
import axios from "../axiosConfig";

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

export const updateAboutParagraph = (id, updatedParagraph) => async (
  dispatch
) => {
  try {
    await axios.put(`/about/paragraphs/${id}`, updatedParagraph);

    dispatch({
      type: UPDATE_ABOUT_PARAGRAPH,
      payload: updatedParagraph,
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

export const deleteAboutParagraph = (id) => async (dispatch) => {
  try {
    await axios.delete(`/about/paragraphs/${id}`);

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
