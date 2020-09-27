import {
  GET_POSTS,
  GET_POST,
  POST_ERROR,
  UPDATE_POST,
  DELETE_POST,
  ADD_POST,
} from "../actions/types";

const initialState = {
  posts: [],
  post: {},
  loading: true,
  error: {},
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_POSTS:
      return {
        ...state,
        posts: payload,
        loading: false,
      };
    case GET_POST:
      return {
        ...state,
        post: payload,
        loading: false,
      };
    case DELETE_POST:
      return {
        ...state,
        posts: state.posts.filter((post) => post.id !== payload),
      };
    case POST_ERROR:
      return {
        ...state,
        error: payload,
        loading: false,
      };
    case ADD_POST:
      return {
        ...state,
        posts: [...state.posts, payload],
      };
    // TODO Update state
    case UPDATE_POST:
    default:
      return state;
  }
}
