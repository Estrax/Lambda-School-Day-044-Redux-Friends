import {
    
} from '../actions';

const initialState = {
    friends: [],
    fetching: false,
    error: null
};

export const friendsReducer = (state = initialState, action) => {
    switch (action.type) {

        default:
            return state;
    }
};
