import { combineReducers } from "redux";
// TODO Add reducers
import itemReducer from "./itemReducer";

export default combineReducers({
  item: itemReducer,
});
