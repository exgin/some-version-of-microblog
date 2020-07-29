import { combineReducers } from 'redux';

import reducerPost from './reducerPost';
import reducerTitle from './reducerTitle';

const rootReducer = combineReducers({ reducerTitle, reducerPost });

export default rootReducer;
