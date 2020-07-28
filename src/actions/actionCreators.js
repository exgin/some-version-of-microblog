import { ADD_TO_BLOG, ERROR, FETCH_ALL_BLOGS } from './actionTypes';
import axios from 'axios';

const BACKEND_URL = process.env.BACKEND_URL || 'http://127.0.0.1:5000';

// finish getting all blog posts & show them on BlogList |
// Getting actions must be plain objects error, I thought I am using middle for this?, look into the error
export function fetchAllBlogs() {
  return async function (dispatch) {
    try {
      const { data } = await axios.get(`${BACKEND_URL}/api/posts`);
      console.log(data);
      dispatch(gotAllBlogs(data));
    } catch (error) {
      dispatch(gotError());
    }
  };
}

export function addPostToDB(title, body, description) {}

export function addToBlog(id) {
  return { type: ADD_TO_BLOG, id };
}

export function gotError() {
  return { type: ERROR };
}

export function gotAllBlogs() {
  return { type: FETCH_ALL_BLOGS };
}
