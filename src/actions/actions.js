import { ADD_TO_BLOG } from './actionTypes';

export function addToBlog(id) {
  return { type: ADD_TO_BLOG, id };
}
