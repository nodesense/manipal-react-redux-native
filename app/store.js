// initialize and create store

import {createStore, combineReducers, applyMiddleware} from 'redux';

// redux is a sync library, for async, we could use middleware, thunk is one option
// middleware, deployed between dispatch and reducers
// it will observe if the action is a object, it will forward to reducers
// if the action is a function, it will execute teh function, doesn't forward
// async code, api calls, timer specific calls
import thunk from 'redux-thunk';

import {authReducer} from './state/reducers/authReducer';
import {cartReducer} from './state/reducers/cartReducer';
import {productReducer} from './state/reducers/productReducer';
import {counterReducer} from './state/reducers/counterReducer';

const rootReducer = combineReducers({
    // stateName: reducerFunction
    counter: counterReducer,
    cartItems: cartReducer,
    auth: authReducer,
    product: productReducer
});

const store = createStore(rootReducer, applyMiddleware(thunk) );

export default store;