import React, {Component} from 'react';
import {View, Button} from 'react-native';

class Login extends Component {
    constructor(props) {
        super(props);
        
    }

    login = () => {
        const user = {
            username: 'Krish',
            roles: ['admin', 'staff']
        }

        const {loginSuccess} = this.props;
        loginSuccess(user); // bindActionCreator function, it automaticaly dispatch, dispatch to store
    }

    render() { 
        return ( 
            <View>
                <Button title="Login" onPress={this.login} />
            </View>
         );
    }
}
 
export default Login;