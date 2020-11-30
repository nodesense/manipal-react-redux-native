import React, { Component } from 'react';
import {View, Text, Button} from 'react-native';

class AsyncStorageExample extends Component {
    constructor(props) {
        super(props);
        this.state = { data: undefined }
    }
    storeData = async (key, value) => {
        try {
          await AsyncStorage.setItem(key, value)
        } catch (e) {
          // saving error
        }
      }

      storeObj = async (key, value) => {
        try {
          const jsonValue = JSON.stringify(value)
          await AsyncStorage.setItem(key, jsonValue)
        } catch (e) {
          // saving error
        }
      }

    getData = async (key) => {
        try {
          const value = await AsyncStorage.getItem(key)
          if(value !== null) {
            // value previously stored
            this.setItem({data: value})
          }
        } catch(e) {
          // error reading value
        }
      }

    getObject = async (key) => {
        try {
          const jsonValue = await AsyncStorage.getItem(key)
          if (  jsonValue != null) {
            const j =  JSON.parse(jsonValue);
            this.setItem({data: JSON.stringify(j)})
          } 
        } catch(e) {
          // error reading value
        }
      }

    render() { 
        return (
            <>
            <View>
                <Text>Async Storage</Text>
                <Button title="set" onPress={() => this.storeData('mydata', 'myvalue')} />

                <Button title="set Obj" onPress={() => this.storeObj('myobj', {name: 'native'})} />

                <Button title="Get" onPress={ () => this.getData("mydata")} />

                <Button title="Get Obj" onPress={ () => this.getObject("mydata")} />
            </View>
            </>
          );
    }
}
 
export default AsyncStorageExample;