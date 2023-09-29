import rootReducer from "./reducer/index.js";
import thunk from "redux-thunk";
import { createStore, applyMiddleware } from "redux";

export const store = createStore(rootReducer, applyMiddleware(thunk))