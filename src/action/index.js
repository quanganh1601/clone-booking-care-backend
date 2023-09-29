import { LANGUAGE } from "../constant/index";

export const changeLanguage = (language) => (dispatch) => {
  dispatch({
    type: LANGUAGE,
    payload: language
  });
};