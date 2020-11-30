import React, { Component, PureComponent } from 'react';

import {FlatList, View} from 'react-native';

import CartItem from './CartItem';

class CartList extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    renderCartItem = ( {item} ) => {
        return (
                <CartItem item={item} removeItem={this.props.removeItem} />
        )
    }

    // class component
    // called on update cycle
    // called when this.setState
    // called when the parent render called
    // purpose of this function is return true or false
    // this decide whether render can be called or not
    // compare the data nextProp with currentProps, nextState with current state
    // return true - this calls render function
    // return false - this will not call render function
    // shouldComponentUpdate(nextProps, nextState) { // instead pure component
    //     if (nextProps.items != this.props.items) {
    //         console.log("Items changed, rendering now")
    //         return true;
    //     }

    //     console.log("No change in items, no render call")
    //     return false;
    // }

    render() { 
        console.log("CartList render called");
        return ( <> 
                <View>
                    <FlatList data={this.props.items}
                              renderItem={this.renderCartItem}
                              keyExtractor={ (item) => item.id.toString()}>

                    </FlatList>
                </View>
        </> );
    }
}
 
export default CartList;