import { FETCH_POST, ERROR, ADD_POST, ADD_COMMENT, REMOVE_COMMENT } from '../actions/actionTypes';

function reducerPost(state = {}, action) {
  switch (action.type) {
    case FETCH_POST:
      // { 1: id: 1, des: 'test' }
      return { ...state, [action.post.id]: action.post };

    case ADD_POST:
      // { 1: id: 1, des: 'test' }
      return { ...state, [action.post.id]: { ...action.post, comments: [] } };

    case ADD_COMMENT:
      // we get Oh no error! when posting to our comments, but when i refresh it's there posts: {[all potsts]}
      console.log('add', state.posts[0].comments, action.comment);
      // we want to add to our | state.posts[0].comments: action.comment
      //                       |  ^ all of my comments     ^ comment getting added
      return { ...state };

    case REMOVE_COMMENT:
      console.log(state[action.pId]);
      return { ...state, [action.pId]: { ...state[action.pId], comments: state[action.pId].comments.filter((c) => c.id !== action.cId) } };

    case ERROR:
      return { ...state, error: true };

    default:
      return state;
  }
}

export default reducerPost;
