import React from 'react';
import {ScrollView, 
        View, 
        Button, 
        Text } from 'react-native';

import CartSummary from '../components/CartSummary';
import CartList from '../components/CartList';
import memoizeOne from 'memoize-one';

// no redux


const calculate = (items) => {
    console.log("Expensive computation for items ")
    let amount = 0, qty = 0;

    for (const item of items) {
        amount += item.price * item.qty;
        qty += item.qty;
    }

    // return new state, these values shall be merged into react component state
    return {
        //amount: amount // es 5 style
        amount, // es6 style
        count : qty
    }
};

const memoizedCalculate = memoizeOne(calculate);
 

class CartScreen extends React.Component {
    constructor(props) {
        super(props);

        const items = []
        for (let i = 0 ; i < 1000; i++) {
            let id = Math.ceil(Math.random() * 1000000);
            let item = {
                id,
                name: `Product ${id}`,
                price: Math.ceil(Math.random() * 100),
                qty: 1
            }
            items.push(item)
        }

        this.state = {
            items,
            // items: [ 
            // 			{id: 1, name: 'P1', price: 100, qty: 1}
            // 	   ],
            amount: 0, // sum of all items price * qty
            count: 0, // sum of all items qty
            flag: true
        }
    }

    // called before render on creation/update cycle
    static getDerivedStateFromProps(props, state) {
        console.log("getDerivedStateFromProps")
        // get new state from existing props and state
        return memoizedCalculate(state.items);
    }

    addItem = (e) => {
        let id = Math.ceil(Math.random() * 10000);
        let item = {
            id,
            name: `Product ${id}`,
            price: Math.ceil(Math.random() * 100),
            qty: 1
        }

        /// ... spread operator when is used in expression side

        this.setState({
            items: [...this.state.items, item]
        })
    }

    empty = (e) => {
        this.setState({
            items: []
        })
    }

    removeItem = (id) => {
        //TODO: remote item from items
        this.setState({
            items: this.state.items.filter( item => item.id !== id)
        })
    }

    toggle = () => {
        // no change in cart items, think toggle is needed but not for cart
        // setState will trigger render function
        this.setState({toggle: true})
    }

    render() {
        return (
            <>
                
                    <View>
                         <Text>Shopping Cart</Text>
                         <Text>Items count {this.state.items.length} </Text>
                         <Text> Amount {this.state.amount} </Text>
                         <Text> Qty {this.state.count} </Text>

                         <Button title="Add Item" onPress={this.addItem} />
                         <Button title="Empty" onPress={this.empty} />
                         <Button title="Toggle" onPress={this.toggle} />
                            
                            {/* while using pure component, not to use arrow function in render as props 
                                 removeItem={(id) => this.removeItem(id)} is BAD
                                 the function is created new whenever render called
                                 PureComponetn will diff props, the func are difference always
                                 always call render function
                            */}

                         <CartList items = {this.state.items} removeItem={this.removeItem} />
                         <CartSummary count={this.state.count} amount={this.state.amount} />
                    </View>
                 
            </>
        )
    }
}

export default CartScreen;