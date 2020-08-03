import { FETCH_POST, ERROR, ADD_POST, ADD_COMMENT, REMOVE_COMMENT, REMOVE_POST, VOTE } from '../actions/actionTypes';

function reducerPost(state = {}, action) {
  switch (action.type) {
    case FETCH_POST:
      // ** { 1: id: 1, des: 'test' }
      return { ...state, [action.post.id]: action.post };

    case ADD_POST:
      // ** { 1: id: 1, des: 'test' }
      return { ...state, [action.post.id]: { ...action.post, comments: [] } };

    case REMOVE_POST:
      // update Redux store when deleting, even though we can technically skip this step when we redirect to home when the request is set to backend
      let currentPosts = { ...state };
      delete currentPosts[action.pId];

      return currentPosts;

    case ADD_COMMENT:
      // FIX we now had our pId & text in our action from updating our actionCreato addComment()
      // ** state[action.pId] is the key of the current post within the state, so we get our entire object back
      //                                                                 | we want the previous comments (since everything has to be pure),
      //                                                                 | & the current action.comment to be pushed into those comments state
      return { ...state, [action.pId]: { ...state[action.pId], comments: [...state[action.pId].comments, action.comment] } };

    case REMOVE_COMMENT:
      return { ...state, [action.pId]: { ...state[action.pId], comments: state[action.pId].comments.filter((c) => c.id !== action.cId) } };

    case VOTE:
      return { ...state, [action.pId]: { ...state[action.pId], votes: action.votes } };

    case ERROR:
      return { ...state, error: true };

    default:
      return state;
  }
}

export default reducerPost;
