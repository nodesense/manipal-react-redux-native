import React, { Component } from 'react';
import {View, Text, TextInput, Switch, Alert} from 'react-native';


class Checkout extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            name: '',
            email: '',
            shipToHome: false
        }
    }

    onChangeNameHandler = (value) => {
        this.setState({
            name: value
        })
    }

    
 
    render() { 
        return ( 
            <>
            <View>
                <Text>Checkout</Text>
                <Text>Name</Text>
                <TextInput value={this.state.name} 
                            onChangeText={this.onChangeNameHandler}
                />

                <Text>Email</Text>
                <TextInput value={this.state.email} 
                            onChangeText={ (value) => this.setState({email: value})}
                />

                <Text>Ship to Home?</Text>
                <Switch value={this.state.shipToHome}
                        onValueChange= { () => this.setState({shipToHome: !this.state.shipToHome})}
                />
            </View>
            </>
          );
    }
}
 
export default Checkout;