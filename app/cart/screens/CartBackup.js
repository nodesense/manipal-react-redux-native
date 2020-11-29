import React from 'react';
import {ScrollView, 
        View, 
        Button, 
        Text } from 'react-native';

import CartSummary from '../components/CartSummary';
import CartList from '../components/CartList';

class Cart extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            items: [ 
            			{id: 1, name: 'P1', price: 100, qty: 1}
            	   ],
            amount: 0, // sum of all items price * qty
            count: 0, // sum of all items qty
            flag: true
        }
    }

    // called before render on creation/update cycle
    static getDerivedStateFromProps(props, state) {
        // get new state from existing props and state
        let amount = 0, qty = 0;

        for (const item of state.items) {
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

                         <CartList items = {this.state.items} removeItem={this.removeItem} />
                         <CartSummary count={this.state.count} amount={this.state.amount} />
                    </View>
                 
            </>
        )
    }
}

export default Cart;