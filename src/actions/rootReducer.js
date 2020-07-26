import data from '../data.json';
import { ADD_TO_BLOG } from './actionTypes';

const INT_STATE = { blogs: data.blogs };

function rootReducer(state = INT_STATE, action) {
  switch (action.type) {
    case ADD_TO_BLOG: {
      // we don't care about having duplicate IDs since all posts will be different anyways, thus different IDs
      // add a new blog to allBlogs, with the existing blogs
      return { ...state, [action.blog.id]: { ...action.blog } };
    }

    default:
      return state;
  }
}

export default rootReducer;
