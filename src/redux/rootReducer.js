import { combineReducers } from "redux";
import sessionReducer from "./session/session-reducers";

export default combineReducers({
  session: sessionReducer
});
