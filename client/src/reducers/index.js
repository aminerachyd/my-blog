import { combineReducers } from "redux";

import postReducer from "./postReducer";
import aboutReducer from "./aboutReducer";
import authReducer from "./authReducer";

export default combineReducers({
  post: postReducer,
  about: aboutReducer,
  auth: authReducer,
});
