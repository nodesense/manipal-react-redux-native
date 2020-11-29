//cartReducer.js
import * as ActionTypes from '../action-types';

const INITIAL_STATE = []

export const cartReducer = (state = INITIAL_STATE, action) => {
    console.log('cartReducer called', state, action);

    switch(action.type) {
        case ActionTypes.ADD_ITEM: 
                return [...state, action.payload.item];
        case ActionTypes.REMOVE_ITEM: 
                return state.filter(item => item.id !== action.payload.id)

        case ActionTypes.UPDATE_ITEM:
                return state.map (item => item.id === action.payload.id?    
                                                            {...item, qty: action.payload.qty}
                                                            : item );
        case ActionTypes.EMPTY_CART:
                return INITIAL_STATE;
        
        case ActionTypes.LOGOUT:
                return INITIAL_STATE;
                
        default: return state;
    }
}