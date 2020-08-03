import axios from 'axios';

import { FETCH_POST, ADD_POST, ADD_COMMENT, REMOVE_COMMENT, REMOVE_POST, VOTE } from './actionTypes';
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

export function removePostFromAPI(pId) {
  return async function (dispatch) {
    try {
      await axios.delete(`${BACKEND_URL}/api/posts/${pId}`);
      dispatch(removePost(pId));
    } catch (error) {
      console.log(error);
      dispatch(gotError());
    }
  };
}

export function removePost(pId) {
  return { type: REMOVE_POST, pId };
}

export function sendComment(id, text) {
  return async function (dispatch) {
    try {
      const { data } = await axios.post(`${BACKEND_URL}/api/posts/${id}/comments/`, { text });
      // FIX add our postId to the addComment parameters ** look at route is returning & accepting | now we have access to the postId
      dispatch(addComment(id, data));
    } catch (error) {
      console.log(error);
      dispatch(gotError());
    }
  };
}

// FIX adding comment not working | we need pId & comment to even update the API ** look at route
export function addComment(pId, comment) {
  return { type: ADD_COMMENT, pId, comment };
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

export function sendVoteToAPI(pId, direction) {
  return async function (dispatch) {
    try {
      const { data } = await axios.post(`${BACKEND_URL}/api/posts/${pId}/vote/${direction}`);
      dispatch(vote(pId, data.votes));
    } catch (error) {
      console.log(error);
      dispatch(gotError());
    }
  };
}

export function vote(pId, votes) {
  return { type: VOTE, pId, votes };
}
