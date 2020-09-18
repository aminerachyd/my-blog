import { combineReducers } from "redux";

import postReducer from "./postReducer";
import aboutReducer from "./aboutReducer";

export default combineReducers({
  post: postReducer,
  about: aboutReducer,
});
