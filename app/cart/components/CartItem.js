import React from 'react';

import {View, Button, Text} from 'react-native';

// item = props.item, destructing
const CartItem = ({item, removeItem}) => {
    return ( 
            <> 
            <View>
                <Text>{item.name}</Text>
                <Text>{item.qty}</Text>
                <Text>{item.price}</Text>
                <Text>{item.price * item.qty}</Text>
                <Button title="X" onPress= { () => removeItem(item.id) } /> 
            </View>
            </> 
    );
}
 
export default CartItem;