import { FETCH_POSTS, ERROR } from '../actions/actionTypes';

const INT_STATE = { posts: {}, error: false };

function reducerPost(state = INT_STATE, action) {
  switch (action.type) {
    case FETCH_POSTS:
      return { ...state, posts: [action.post], error: false };

    case ERROR:
      return { ...state, error: true };

    default:
      return state;
  }
}

export default reducerPost;
