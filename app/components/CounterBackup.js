import React, {Component} from 'react';

import {View, Button, Text} from 'react-native';

// Problem: tight binding with redux
import * as actions from '../state/actions/counter.actions';
import store from '../store';

// demonstrating redux directly in react code
// in practical scenarios, we don't do this, instead use react-redux bridge library

class Counter extends Component {
    constructor(props) {
        super(props);
    }

    increment = () => {
        // first, create action using action creator
        console.log("**ACTION CREATOR, CREATING ACTION");
        const action = actions.increment(1);
        // dispatch the action
        // calls reducer, set the new state in store
        console.log("**DISPATCHING ACTION", action);
        store.dispatch(action);
    }

    decrement = () => {
        store.dispatch(actions.decrement(1));
    }

    reset = () => {
        store.dispatch(actions.reset());
    }

    componentDidMount() {
        // subscribe returns a function for unsubscription
        this.unsubscribe = store.subscribe ( () => {
            // react class component func,
            // trigger render function
            console.log("**Store subscribe ");
            this.forceUpdate(); // trigger render
        });
    }
    componentWillUnmount() {
        // stop susbcription from store
        if (this.unsubscribe) {
            this.unsubscribe();
            this.unsubscribe = null;
        }
    }

    render() { 
        console.log("***Counter Render");
        console.log("***STORE QUERY, Get from store");
        const state = store.getState(); 
        // destructruing
        const {counter} = state;

        return (
            <>
                <View>
                    <Text>Counter {counter}</Text>
                    <Button title="Incr" onPress={this.increment} />
                    <Button title="Decr" onPress={this.decrement} />
                    <Button title="Reset" onPress={this.reset} />
                    
                </View>
            </>
        );
    }
}
 
export default Counter;