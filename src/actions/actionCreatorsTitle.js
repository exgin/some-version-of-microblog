import { ERROR, FETCH_TITLES } from './actionTypes';
import axios from 'axios';

const BACKEND_URL = process.env.BACKEND_URL || 'http://127.0.0.1:5000';

export function fetchTitles() {
  return async function (dispatch) {
    try {
      const { data } = await axios.get(`${BACKEND_URL}/api/posts`);
      dispatch(getTitles(data));
    } catch (error) {
      console.log(error);
      dispatch(gotError());
    }
  };
}

export function getTitles(titles) {
  return { type: FETCH_TITLES, titles };
}

export function gotError() {
  return { type: ERROR };
}
