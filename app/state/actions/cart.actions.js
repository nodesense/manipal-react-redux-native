import * as ActionTypes from '../action-types';

// es6 with single line functions
// action creators

export const addItem = (item) => ({
    type: ActionTypes.ADD_ITEM,
    payload: {item}
})

export const removeItem = (id) => ({
    type: ActionTypes.REMOVE_ITEM,
    payload: {id}
})

export const updateItem = (id, qty) => ({
    type: ActionTypes.UPDATE_ITEM,
    payload: {id, qty}
})

export const emptyCart = () => ({type: ActionTypes.EMPTY_CART})