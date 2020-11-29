// Shall use redux, without tight dependencies with redux

import React from 'react';
import {View, Button, Text} from 'react-native';

const Counter = (props) => {
    // container shall pass all this props
    const {counter, increment, reset, decrement, navigation} = props;
    return ( 
        <>
        <View>
            <Text>Counter {counter}</Text>
            <Button title="Incr" onPress={increment} />
            
            <Button title="Decr -1" onPress={() => decrement(1)} />
            <Button title="Decr -2" onPress={() => decrement(2)} />

            <Button title="Reset" onPress={reset} />

            <Button title="Cart" onPress= { () =>  navigation.navigate('Cart')  } />
        </View>
    </>
     );
}
 
export default Counter;