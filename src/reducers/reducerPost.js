import { FETCH_POSTS, ERROR, ADD_POST } from '../actions/actionTypes';

const INT_STATE = { posts: {}, error: false };

function reducerPost(state = INT_STATE, action) {
  switch (action.type) {
    case FETCH_POSTS:
      return { ...state, posts: [action.post], error: false };

    case ADD_POST:
      console.log(action);
      return state;

    case ERROR:
      return { ...state, error: true };

    default:
      return state;
  }
}

export default reducerPost;
