import React, { Component } from 'react';

import {FlatList, View} from 'react-native';

import CartItem from './CartItem';

class CartList extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    renderCartItem = ( {item} ) => {
        return (
                <CartItem item={item} removeItem={this.props.removeItem} />
        )
    }

    render() { 
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