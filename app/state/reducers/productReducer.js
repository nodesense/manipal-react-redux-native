//productReducer.js
import * as ActionTypes from '../action-types';

const INITIAL_STATE = { 
    products: [],
    loading: false, 
    error: undefined
}

export const productReducer = (state = INITIAL_STATE, action) => {
    console.log('productReducer called', state, action);

    switch(action.type) {
        case ActionTypes.SET_PRODUCTS : 
                return {...state, products: action.payload.products}

        case ActionTypes.LOADING_PRODUCTS: 
                return {...state, loading: action.payload.loading}

        case ActionTypes.LOGOUT: 
                return INITIAL_STATE;
                     
        default: return state;
    }
}