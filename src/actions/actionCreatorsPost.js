import axios from 'axios';

import { FETCH_POST, ADD_POST, ADD_COMMENT, REMOVE_COMMENT } from './actionTypes';
import { gotError } from './actionCreatorsTitle';

const BACKEND_URL = process.env.BACKEND_URL || 'http://127.0.0.1:5000';

export function fetchPost(id) {
  return async function (dispatch) {
    try {
      const { data } = await axios.get(`${BACKEND_URL}/api/posts/${id}`);
      dispatch(getPost(data));
    } catch (error) {
      console.log(error);
      dispatch(gotError());
    }
  };
}

export function getPost(post) {
  return { type: FETCH_POST, post };
}

export function sendPost(title, description, body) {
  return async function (dispatch) {
    try {
      const { data } = await axios.post(`${BACKEND_URL}/api/posts`, { title, description, body });
      dispatch(addPost(data));
    } catch (error) {
      console.log(error);
      dispatch(gotError());
    }
  };
}

export function addPost(post) {
  return { type: ADD_POST, post };
}

export function sendComment(id, text) {
  return async function (dispatch) {
    try {
      const { data } = await axios.post(`${BACKEND_URL}/api/posts/${id}/comments/`, { text });
      dispatch(addComment(data));
    } catch (error) {
      console.log(error);
      dispatch(gotError());
    }
  };
}

export function addComment(comment) {
  return { type: ADD_COMMENT, comment };
}

export function removeCommentFromAPI(pId, cId) {
  return async function (dispatch) {
    try {
      await axios.delete(`${BACKEND_URL}/api/posts/${pId}/comments/${cId}`);
      dispatch(removeComment(pId, cId));
    } catch (error) {
      console.log(error);
      dispatch(gotError());
    }
  };
}

export function removeComment(pId, cId) {
  return { type: REMOVE_COMMENT, pId, cId };
}
