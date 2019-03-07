import { combineReducers } from 'redux';
import { usersReducer } from './users';
import { friendsReducer } from './friends';

export default combineReducers({
    usersReducer,
    friendsReducer
});
