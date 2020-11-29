import React, { Component } from 'react';

import {View, Text} from 'react-native';

class CartSummary extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            grandTotal: 0,
            discount: 0
         }
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        let grandTotal = 0, discount = 0;
        
        if (nextProps.count >= 10) {
            discount = 20;
        } else if (nextProps.count >= 5) {
            discount = 5;
        }

        grandTotal = nextProps.amount - (nextProps.amount * discount / 100.0)

        // return new state
        return {
            grandTotal,
            discount
        }
    }

    // parent shall send amount and count props to child
    // child to have business logic
    // if count > 10, apply 20%
    // if count >= 5, apply 10%
    // else no discount

    render() { 
        return (
                <>
                    <View>
                        <Text>Discount {this.state.discount} %</Text>
                        <Text>Grand Total {this.state.grandTotal}</Text>

                    </View>
                </>);
    }
}
 
export default CartSummary;