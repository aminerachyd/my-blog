import { GET_ABOUT_PARAGRAPHS, GET_ABOUT_PROJECTS, ABOUT_ERROR } from "./types";
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
