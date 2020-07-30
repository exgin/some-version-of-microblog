import { FETCH_POSTS, ERROR, ADD_POST } from '../actions/actionTypes';

const INT_STATE = { posts: {}, error: false };

function reducerPost(state = INT_STATE, action) {
  switch (action.type) {
    case FETCH_POSTS:
      console.log(action);
      return { ...state, posts: [action.id], error: false };

    case ADD_POST:
      return state;

    case ERROR:
      return { ...state, error: true };

    default:
      return state;
  }
}

export default reducerPost;
