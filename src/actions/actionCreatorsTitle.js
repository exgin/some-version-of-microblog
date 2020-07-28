import { ERROR, FETCH_TITLES } from './actionTypes';
import axios from 'axios';

const BACKEND_URL = process.env.BACKEND_URL || 'http://127.0.0.1:5000';

// finish getting all blog posts & show them on BlogList |
// Getting actions must be plain objects error, I thought I am using middle for this?, look into the error
export function fetchTitles() {
  return async function (dispatch) {
    try {
      const { data } = await axios.get(`${BACKEND_URL}/api/posts`);
      console.log(`actionCreatorTitle`, data);
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
