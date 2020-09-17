import { combineReducers } from "redux";
// TODO Add reducers
import itemReducer from "./itemReducer";
import postReducer from "./postReducer";

export default combineReducers({
  item: itemReducer,
  post: postReducer,
});
