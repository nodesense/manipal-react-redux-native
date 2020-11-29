import * as ActionTypes from '../action-types';

const INITIAL_STATE = 0;

// default parameter used only if state is undefined, first time
// set initial state to 0
export const counterReducer = (state = INITIAL_STATE, action) => {
    console.log('counterReducer called', state, action);
    switch (action.type) {
        case ActionTypes.INCREMENT: 
                            return state + action.payload.value
        case ActionTypes.DECREMENT: 
                            return state - action.payload.value

        case ActionTypes.RESET:
                            return INITIAL_STATE

        default: // MUST
                return state;
    }
}