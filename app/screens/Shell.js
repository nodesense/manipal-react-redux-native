import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'
 
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';

import Ionicons from 'react-native-vector-icons/Ionicons';

 
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button
} from 'react-native';
  
  
import Cart from '../cart/containers/Cart'
import ProductList from '../cart/containers/ProductList'
import Checkout from '../cart/screens/Checkout'
import Counter from '../containers/Counter';
 
function Home(props) {
  const {navigation} = props;

    return (
      <View>
         <Button title="Products" onPress= { () => navigation.navigate('ProductList') } />
         <Button title="Cart" onPress= { () =>  navigation.navigate('Cart')  } />
         <Button title="Checkout" onPress= { () => navigation.navigate('Checkout') } />
         <Button title="Counter" onPress= { () => navigation.navigate('Counter') } />
          <Ionicons name={"ios-information-circle"} size={80} color={'red'} />
      </View>
    )
}

  
const Drawer = createDrawerNavigator();

// reference : React nativation docs
function CustomDrawerContent(props) {
    const {logout} = props;
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <DrawerItem
        label="Close drawer"
        onPress={() => props.navigation.closeDrawer()}
      />
      <DrawerItem
        label="Toggle drawer"
        onPress={() => props.navigation.toggleDrawer()}
      />
        <DrawerItem
        label="Logout"
        onPress={() =>  logout() }
      />
    </DrawerContentScrollView>
  );
}

const Shell = ({logout}) => {
  return (
    <>
      <NavigationContainer>
        
      <Drawer.Navigator drawerContent={props => <CustomDrawerContent {...props} logout={logout} />}>
  

      <Drawer.Screen name="Home" component={Home} options={{ title: 'Home'}}/>


      <Drawer.Screen name="ProductList" component={ProductList} options={{ title: 'Product List'}}/>

      <Drawer.Screen name="Cart" component={Cart} options={{
           title: 'Cart',
           headerRight:()=>(
            <Button
            onPress={() => alert('This is a button!')}
            title="Info"
            color="black"
          />
          )
           }} />

      <Drawer.Screen name="Counter" component={Counter} options={{
           title: 'Counter',
           headerRight:()=>(
            <Button
            onPress={() => alert('This is a button!')}
            title="Info"
            color="black"
          />
          )
           }} />
           


       
        <Drawer.Screen name="Checkout" component={Checkout}  options={{ 
          title: 'Checkout',
          headerRight:()=>(
            <Button
            onPress={() => alert('This is a button!')}
            title="Info"
            color="#black"
          />
          )
          }}/>
      </Drawer.Navigator>
    </NavigationContainer>
    </>
  );
};
 

export default Shell;