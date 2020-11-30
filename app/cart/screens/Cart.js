import React from 'react';

import {ScrollView, 
    View, 
    Button, 
    Text } from 'react-native';

import CartSummary from '../components/CartSummary';
import CartList from '../components/CartList';
import LanguageContext from '../../contexts/LanguageContext';
 
// redux with containers

const Cart = (props) => {
    const {items, amount, count, addItem, emptyCart, removeItem, navigation} = props;
    return ( <>
                
        <View>
             <Text>Shopping Cart</Text>
             <Text>Items count {items.length} </Text>
             <Text> Amount {amount} </Text>
             <Text> Qty {count} </Text>

             <LanguageContext.Consumer>
                 {(langDict) => (
                    <>
                    <Button title={langDict.addItem} onPress={addItem} />
                    <Button title={langDict.empty} onPress={emptyCart} />
                    <Button title={langDict.checkout} onPress= { () =>  navigation.navigate('Checkout')  } />
                    </>
                 )}
             </LanguageContext.Consumer>


             <CartList items = {items} removeItem={(id) => removeItem(id)} />
             <CartSummary count={count} amount={amount} />
        </View>
     
</>  );
}
 
export default Cart;