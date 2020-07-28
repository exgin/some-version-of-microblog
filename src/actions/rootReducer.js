import { ADD_TO_BLOG, ERROR, FETCH_ALL_BLOGS } from './actionTypes';

const INT_STATE = { blogs: {}, error: false };

function rootReducer(state = INT_STATE, action) {
  switch (action.type) {
    case ADD_TO_BLOG:
      // we don't care about having duplicate IDs since all posts will be different anyways, thus different IDs
      // add a new blog to allBlogs, with the existing blogs
      return { ...state, [action.blog.id]: { ...action.blog } };

    case FETCH_ALL_BLOGS:
      console.log(state.blogs);
      return { ...state, blogs: action.blogs };

    case ERROR:
      return { ...state, error: true };

    default:
      return state;
  }
}

export default rootReducer;
