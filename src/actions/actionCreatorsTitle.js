import { ERROR, FETCH_TITLES } from './actionTypes';
import axios from 'axios';

const REACT_APP_BACKEND_URL = process.env.REACT_APP_BACKEND_URL || 'http://127.0.0.1:5000';

console.log(process.env);

export function fetchTitles() {
  return async function (dispatch) {
    try {
      const { data } = await axios.get(`${REACT_APP_BACKEND_URL}/api/posts`);
      dispatch(gotTitles(data));
    } catch (error) {
      console.log(error);
      dispatch(gotError());
    }
  };
}

export function gotTitles(titles) {
  return { type: FETCH_TITLES, titles };
}

export function gotError() {
  return { type: ERROR };
}
