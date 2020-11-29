import * as ActionTypes from '../action-types';

// login, username/password
// after login, username, email, role to put into store
// logout

export const login = (username, password) => ({
    type: ActionTypes.LOGIN,
    payload: {
        username,
        password
    }
})

export const logout = () => ({type: ActionTypes.LOGOUT})

export const loginSuccess = (user) => ({
    type: ActionTypes.LOGIN_SUCCESS,
    payload: {user}
})