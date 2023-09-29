import { LANGUAGE } from "../constant/index";
import { combineReducers } from 'redux';
const initState = {
  language: "vi",
};

export const reducer = (state = initState, action) => {
  switch (action.type) {
    case LANGUAGE:
      return { ...state, language: action.payload };

    default:
      return state;
  }
};

export default combineReducers({
  reducer: reducer
});



