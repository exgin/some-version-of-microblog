import { FETCH_TITLES, ERROR } from '../actions/actionTypes';

const INT_STATE = { titles: [], error: false };

function reducerTitle(state = INT_STATE, action) {
  switch (action.type) {
    case FETCH_TITLES:
      console.log(action);
      return { ...state, titles: [...action.titles], error: false };

    case ERROR:
      return { ...state, error: true };

    default:
      return state;
  }
}

export default reducerTitle;
