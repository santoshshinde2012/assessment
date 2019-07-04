import { createStore } from "redux";
import initialState from "../reducers/initialState";
import rootReducer from "../reducers";

//https://stackoverflow.com/questions/51503198/error-error-error-error-you-may-not-call-store-getstate-while-the-reducer

export const configureStore = () => {
  return createStore(rootReducer, initialState);
};
