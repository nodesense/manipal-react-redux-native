
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import Cart from '../screens/Cart';
import * as actions from '../../state/actions/cart.actions';
 
function calculate(cartItems) {
    let amount = 0, qty = 0;

    for (const item of cartItems) {
        amount += item.price * item.qty;
        qty += item.qty;
    }

    // return new state, these values shall be merged into react component state
    return {
        //amount: amount // es 5 style
        amount, // es6 style
        count : qty
    }
}

const mapStateToProps = (state) => {
    // return values are passed as props to Counter component
    const calculatedValues = calculate(state.cartItems);
    return {
        // propertyName: value from store
        items: state.cartItems,
        count: calculatedValues.count,
        amount: calculatedValues.amount
    }
}

// the functions here are dispatcher
// map the dispatch to components props
// dispatch = store.dispatch
 
const mapDispatchToProps = (dispatch) => {
    // all 3 functions are passed to component props
    return {
        addItem: () => {
            let id = Math.ceil(Math.random() * 10000);
            let item = {
                id,
                name: `Product ${id}`,
                price: Math.ceil(Math.random() * 100),
                qty: 1
            }

            dispatch(actions.addItem(item))
        },

        //wrapper function which automatically dispatch 
        // bind dispatch and the action function
        removeItem: bindActionCreators(actions.removeItem, dispatch),
        emptyCart: bindActionCreators(actions.emptyCart, dispatch)
    }
}

// create the container

// Component, higher order component
// wrapper for Counter component
// returns a container component 
// container is a parent component
// cart is a child component
// parent component shall pass the props to child
// automatically handle subscribe and unsubscribe
const CartContainer = connect(mapStateToProps, // fetch data from store
                                 mapDispatchToProps // dispatch to store
                                 ) (Cart); // Counter component

export default CartContainer;
