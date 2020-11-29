//authReducer.js
import * as ActionTypes from '../action-types';

const INITIAL_STATE = { 
    authenticated: false,
    user: undefined, //{name, email, role}
}

export const authReducer = (state = INITIAL_STATE, action) => {
    console.log('authReducer called', state, action);

    switch(action.type) {
        case ActionTypes.LOGIN_SUCCESS : 
                return {...state, user: action.payload.user, authenticated: true}
        case ActionTypes.LOGOUT: {
                return {...state, user: undefined, authenticated: false}
        }             
        default: return state;
    }
}