import React, {Component, PureComponent} from 'react';

import {View, Button, Text} from 'react-native';

// we cannot use contextType in functional component
// Context.Consumer
// consume more than one context
// consume context in functional component
import ThemeContext from '../../contexts/ThemeContext';

// item = props.item, destructing

// PureComponent - already implements shouldComponentUpdate method
// it shallow compares next.props with this.props, nextState with this.states
// return true or false

const CartItem2 = ({item, removeItem}) => {
    console.log("Item render called", item.id)
    return ( 
            <> 
            <View>
                <Text>{item.name}</Text>
                <Text>{item.qty}</Text>
                <Text>{item.price}</Text>
                <Text>{item.price * item.qty}</Text>
                <Button title="X" onPress= { () => removeItem(item.id) } /> 

                <ThemeContext.Consumer>
                    {(value) =>  <Text>Color is {value} </Text> }
                </ThemeContext.Consumer>
               

            </View>
            </> 
    );
}

class CartItem  extends PureComponent {
    constructor(props) {
        super(props); 
    }

    // adding more props or state to compare, pain in the maintenance
    // shouldComponentUpdate(nextProps, nextState) {
    //     if (nextProps.item != this.props.item || ) {
    //         return true;
    //     }

    //     return false;
    // }


    render() { 
        const {item, removeItem} = this.props;
        console.log("Item render called", item.id)
        return ( <> 
            <View>
                <Text>{item.name}</Text>
                <Text>{item.qty}</Text>
                <Text>{item.price}</Text>
                <Text>{item.price * item.qty}</Text>
                <Button title="X" onPress= { () => removeItem(item.id) } /> 

                <ThemeContext.Consumer>
                    {(value) =>  <Text>Color is {value} </Text> }
                </ThemeContext.Consumer>
               

            </View>
            </>   );
    }
}
  
 
export default CartItem;