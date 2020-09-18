import { combineReducers } from "redux";
// TODO Add reducers
import itemReducer from "./itemReducer";
import postReducer from "./postReducer";
import aboutReducer from "./aboutReducer";

export default combineReducers({
  item: itemReducer,
  post: postReducer,
  about: aboutReducer,
});
