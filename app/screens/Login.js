import React, {Component} from 'react';
import {View, Button, Text, StyleSheet, TextInput} from 'react-native';
import { Formik } from 'formik'

import ThemeContext from '../contexts/ThemeContext';
import * as yup from 'yup'

const loginValidationSchema = yup.object().shape({
  email: yup
    .string()
    .email("Please enter valid email")
    .required('Email Address is Required'),
  password: yup
    .string()
    .min(8, ({ min }) => `Password must be at least ${min} characters`)
    .required('Password is required'),
})

class Login extends Component {

    // only for class component not for functional component
    // shall ensure that this.context is set with value blue, default value
    static contextType = ThemeContext

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
            <View style={styles.container}>
            <View style={styles.loginContainer}>
                <Button title="Login" onPress={this.login} />
                <Text> Color is {this.context}   </Text>


                <ThemeContext.Consumer>
                    {(value) =>  <Text>Color is {value} </Text> }
                </ThemeContext.Consumer>
                
                <Formik
            initialValues={{ email: '', password: '' }}
            onSubmit={values => console.log(values)}
            initialValues={{ email: '', password: '' }}
            validationSchema={loginValidationSchema}

          >
            {({ handleChange, handleBlur, handleSubmit, 
                values, errors, isValid, touched }) => (
              <>
                <TextInput
                  name="email"
                  placeholder="Email Address"
                  style={styles.textInput}
                  onChangeText={handleChange('email')}
                  onBlur={handleBlur('email')}
                  value={values.email}
                  keyboardType="email-address"
                />
                {(errors.email && touched.email) &&
                  <Text style={styles.errorText}>{errors.email}</Text>
                }

                <TextInput
                  name="password"
                  placeholder="Password"
                  style={styles.textInput}
                  onChangeText={handleChange('password')}
                  onBlur={handleBlur('password')}
                  value={values.password}
                  secureTextEntry
                />

                {(errors.password && touched.password) &&
                  <Text style={styles.errorText}>{errors.password}</Text>
                }

                <Button onPress={handleSubmit} title="Submit" />
              </>
            )}
          </Formik>

            </View>
            </View>
         );
    }
}
 
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
      
    loginContainer: {
      width: '80%',
      alignItems: 'center',
      backgroundColor: 'white',
      padding: 10,
      elevation: 10,
      backgroundColor: '#e6e6e6'
    },
    textInput: {
      height: 40,
      width: '100%',
      margin: 10,
      backgroundColor: 'white',
      borderColor: 'gray',
      borderWidth: StyleSheet.hairlineWidth,
      borderRadius: 10,
    },
    errorText: {
        fontSize: 10,
        color: 'red',
      },
  })

export default Login;