// container to connect redux, react with bridge

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import Counter from '../components/Counter';
import * as actions from '../state/actions/counter.actions';

// map the data from store to component props

// is to return the props [data] to the compoent, getting from store
// state = store.getState()
const mapStateToProps = (state) => {
    // return values are passed as props to Counter component
    return {
        // propertyName: value from store
        counter: state.counter
    }
}

// the functions here are dispatcher
// map the dispatch to components props
// dispatch = store.dispatch
const mapDispatchToProps = (dispatch) => {
    // all 3 functions are passed to component props
    return {
        increment: () => {
            dispatch(actions.increment(1));
        },

        //wrapper function which automatically dispatch 
        // bind dispatch and the action function
        decrement: bindActionCreators(actions.decrement, dispatch),
        // decrement: () => {
        //     dispatch(actions.decrement(1));
        // },

        reset: () => {
            dispatch(actions.reset());
        }
    }
}

// create the container

// Component, higher order component
// wrapper for Counter component
// returns a container component 
// container is a parent component
// counter is a child component
// parent component shall pass the props to child
// automatically handle subscribe and unsubscribe
const CounterContainer = connect(mapStateToProps, // fetch data from store
                                 mapDispatchToProps // dispatch to store
                                 ) (Counter); // Counter component

export default CounterContainer;
