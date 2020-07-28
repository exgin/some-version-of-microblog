import axios from 'axios';

import { FETCH_POSTS } from './actionTypes';
import { gotError } from './actionCreatorsTitle';

const BACKEND_URL = process.env.BACKEND_URL || 'http://127.0.0.1:5000';

export function fetchPost() {
  return async function (dispatch, id) {
    try {
      const { data } = await axios.get(`${BACKEND_URL}/api/posts/${id}`);
      console.log(data);
      dispatch(getPost(data));
    } catch (error) {
      console.log(error);
      dispatch(gotError());
    }
  };
}

export function getPost(id) {
  return { type: FETCH_POSTS, id };
}
