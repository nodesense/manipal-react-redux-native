import 'react-native-gesture-handler'

 
import React from 'react';
import {
  SafeAreaView, 
  View, 
  StatusBar 
} from 'react-native';
import Shell from './containers/Shell';
import Login from './containers/Login';
  
const App = ( {authenticated} ) => {
  return (
    <>
       {authenticated ? <Shell /> : <Login />}
    </>
  );
};

export default App;