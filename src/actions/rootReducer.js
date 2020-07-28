import { ERROR, FETCH_TITLES } from './actionTypes';

const INT_STATE = { titles: [], error: false };

function rootReducer(state = INT_STATE, action) {
  switch (action.type) {
    case FETCH_TITLES:
      console.log(`rootReducer:`, action);
      return { ...state, titles: [...action.titles], error: false };

    case ERROR:
      return { ...state, error: true };

    default:
      return state;
  }
}

export default rootReducer;
