import { combineReducers } from 'redux';
import userReducer from './userReducer'
import commentReducer from './commentReducer'
const rootReducer = combineReducers({
  user: userReducer,
  comment: commentReducer
})

export default rootReducer;