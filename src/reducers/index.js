import { combineReducers } from "redux";
import memory from "./memory";

/**
 * Here we have to combine all reducers
 */
const rootReducer = combineReducers({
  memory
});

export default rootReducer;
