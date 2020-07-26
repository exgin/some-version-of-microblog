import data from './data.json';
import { ADD_TO_BLOG } from './actionTypes';

const INT_STATE = { blogs: data.blogs, allBlogs: {} };

function rootReducer(state = INT_STATE, action) {
  switch (action.type) {
    case ADD_TO_BLOG: {
      // we don't care about having duplicate IDs since all posts will be different anyways, thus different IDs
      // add a new blog to allBlogs, with the existing blogs
      const allBlogsCopy = { ...state.allBlogs };

      allBlogsCopy[action.id] = allBlogsCopy[action.id];

      return { ...state, allBlogs: allBlogsCopy };
    }

    default:
      return state;
  }
}

export default rootReducer;
