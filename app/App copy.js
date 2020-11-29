/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'
import Ionicons from 'react-native-vector-icons/Ionicons';

import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

 
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
 
import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';



const Stack = createStackNavigator();
 
import Cart from './cart/containers/Cart'
import ProductList from './cart/containers/ProductList'
import Checkout from './cart/screens/Checkout'
import Counter from './containers/Counter';
 
function Home(props) {
  const {navigation} = props;

    return (
      <View>
         <Button title="Products" onPress= { () => navigation.navigate('ProductList') } />
         <Button title="Cart" onPress= { () =>  navigation.navigate('Cart')  } />
         <Button title="Checkout" onPress= { () => navigation.navigate('Checkout') } />
         <Button title="Counter" onPress= { () => navigation.navigate('Counter') } />

      </View>
    )
}

 
const App2: () => React$Node = () => {
  return (
    <>
      <NavigationContainer>
      <Stack.Navigator>
 
      

      <Stack.Screen name="Home" component={Home} options={{ title: 'Home'}}/>


      <Stack.Screen name="ProductList" component={ProductList} options={{ title: 'Product List'}}/>

      <Stack.Screen name="Cart" component={Cart} options={{
           title: 'Cart',
           headerRight:()=>(
            <Button
            onPress={() => alert('This is a button!')}
            title="Info"
            color="black"
          />
          )
           }} />

      <Stack.Screen name="Counter" component={Counter} options={{
           title: 'Counter',
           headerRight:()=>(
            <Button
            onPress={() => alert('This is a button!')}
            title="Info"
            color="black"
          />
          )
           }} />
           


       
        <Stack.Screen name="Checkout" component={Checkout}  options={{ 
          title: 'Checkout',
          headerRight:()=>(
            <Button
            onPress={() => alert('This is a button!')}
            title="Info"
            color="#black"
          />
          )
          }}/>
      </Stack.Navigator>
    </NavigationContainer>
    </>
  );
};
 
const Drawer = createDrawerNavigator();


function CustomDrawerContent(props) {
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
    </DrawerContentScrollView>
  );
}

const App3: () => React$Node = () => {
  return (
    <>
      <NavigationContainer>
      <Drawer.Navigator drawerContent={props => <CustomDrawerContent {...props} />}>
 
      

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

const Tab = createBottomTabNavigator();


const App: () => React$Node = () => {
  return (
    <>
      <NavigationContainer>
      <Tab.Navigator drawerContent={props => <CustomDrawerContent {...props} />}
      
      
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused
              ? 'ios-information-circle'
              : 'ios-information-circle-outline';
          } else if (route.name === 'Settings') {
            iconName = focused ? 'ios-list-box' : 'ios-list';
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
      }}
      
      
      
      >
 
      

      <Tab.Screen name="Home" component={Home} options={{ title: 'Home'}}/>


      <Tab.Screen name="ProductList" component={ProductList} options={{ title: 'Product List'}}/>

      <Tab.Screen name="Cart" component={Cart} options={{
           title: 'Cart',
           headerRight:()=>(
            <Button
            onPress={() => alert('This is a button!')}
            title="Info"
            color="black"
          />
          )
           }} />

      <Tab.Screen name="Counter" component={Counter} options={{
           title: 'Counter',
           headerRight:()=>(
            <Button
            onPress={() => alert('This is a button!')}
            title="Info"
            color="black"
          />
          )
           }} />
           


       
        <Tab.Screen name="Checkout" component={Checkout}  options={{ 
          title: 'Checkout',
          headerRight:()=>(
            <Button
            onPress={() => alert('This is a button!')}
            title="Info"
            color="#black"
          />
          )
          }}/>
      </Tab.Navigator>
    </NavigationContainer>
    </>
  );
};


export default App;