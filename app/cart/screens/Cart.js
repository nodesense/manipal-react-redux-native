import React from 'react';

import {ScrollView, 
    View, 
    Button, 
    Text } from 'react-native';

import CartSummary from '../components/CartSummary';
import CartList from '../components/CartList';

const Cart = (props) => {
    const {items, amount, count, addItem, emptyCart, removeItem, navigation} = props;
    return ( <>
                
        <View>
             <Text>Shopping Cart</Text>
             <Text>Items count {items.length} </Text>
             <Text> Amount {amount} </Text>
             <Text> Qty {count} </Text>

             <Button title="Add Item" onPress={addItem} />
             <Button title="Empty" onPress={emptyCart} />

             <Button title="Checkout" onPress= { () =>  navigation.navigate('Checkout')  } />


             <CartList items = {items} removeItem={(id) => removeItem(id)} />
             <CartSummary count={count} amount={amount} />
        </View>
     
</>  );
}
 
export default Cart;