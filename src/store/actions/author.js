import * as actionTypes from "./actionTypes";
import axios from "axios";

export const fetchAuthorDetail = authorID => {
  return async dispatch => {
    //This function gets called by Redux Thunk
    try {
      const response = await axios.get(
        `https://the-index-api.herokuapp.com/api/authors/${authorID}`
      );
      const author = response.data;
      dispatch({
        type: actionTypes.FETCH_AUTHOR_DETAIL,
        payload: author
      });
    } catch (err) {
      console.error(err);
    }
  };
};
