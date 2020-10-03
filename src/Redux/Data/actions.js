import { BROWSE_CATEGORIES_API_ENDPOINT } from "utils/endpoints";
import axios from "axios";
import { FETCH_ACTIONS } from "utils/constants";

export const getBrowseCategories = () => async (dispatch) => {
  console.log(axios.defaults.headers.common);
  dispatch({ type: FETCH_ACTIONS.SET_LOADING });
  const res = await axios.get(BROWSE_CATEGORIES_API_ENDPOINT);
  dispatch({
    type: FETCH_ACTIONS.GET_BROWSE_CATEGORIES,
    payload: res.data,
  });
};
