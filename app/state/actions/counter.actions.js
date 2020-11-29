import * as ActionTypes from '../action-types';

// utility/helper function to create actions
// es5 style
export function increment(value) {
    return {
        type: ActionTypes.INCREMENT,
        payload: { value: value }
    }
}

//es6 style
export const decrement = (value) => {
    return {
        type: ActionTypes.DECREMENT,
        payload: {value}, // value: value
    }
}

//es6 style without return explicitly, single line function
export const reset = () => ({type: ActionTypes.RESET})