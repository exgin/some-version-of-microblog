import { FETCH_POSTS, ERROR, ADD_POST, ADD_COMMENT, REMOVE_COMMENT } from '../actions/actionTypes';

const INT_STATE = { posts: {}, error: false };

function reducerPost(state = INT_STATE, action) {
  switch (action.type) {
    case FETCH_POSTS:
      return { ...state, posts: [action.post] };

    case ADD_POST:
      return { ...state, posts: [...action.post] };

    case ADD_COMMENT:
      // we get Oh no error! when posting to our comments, but when i refresh it's there posts: {[all potsts]}
      console.log('add', state.posts[0].comments, action.comment);
      // we want to add to our | state.posts[0].comments: action.comment
      //                       |  ^ all of my comments     ^ comment getting added
      return { ...state, posts: [...action.post] };

    case REMOVE_COMMENT:
      // not completed
      console.log('remove', action);
      return { ...state, posts: [...action.post, action.post.comment] };

    case ERROR:
      return { ...state, error: true };

    default:
      return state;
  }
}

export default reducerPost;
