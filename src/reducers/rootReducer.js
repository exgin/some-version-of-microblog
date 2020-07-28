import { combineReducers } from 'redux';

import reducerPost from './reducerPosts';
import redcuerTitle from './reducerTitle';

const rootReducer = combineReducers({ redcuerTitle, reducerPost });

export default rootReducer;
