import React, { Component, useEffect, useState, useMemo } from 'react';

import {View, Button, Text} from 'react-native';

// class component has got life cycle method
// componentDidMount, componentDidUpdate
// componentWillUnmount - 

// useMemo
// ref - 

//expensive: filter, sort, recurive, nested forloop...
function add(a, b) {
    console.log("**expensive add ", a, b)
    return a + b;
}

const HookExample = (props) => {
        console.log("HookExample render ", props)
           // value = 0, setCounter is a setter to change teh value for first time
           // second time, counter will be state value
           // the value of the counter remain memory until component is mounted,
           // component is unmounted means, the state also destroyed

    // destructring
    const [counter, setCounter] = useState(0)
    // let arr = useState(0)
    // const counter = arr[0]
    // const setCounter = arr[1]

    const [a, setA] = useState(0)
    const [b, setB] = useState(0)

    // const c = add(a, b) // expensive, on every render, add is called

    const  c = useMemo(() => add(a, b), [a, b]);

    //useEffect, component Life cycle, componentDidUpdate/Mount, componentWillunmount
    useEffect(() => {
        // is called whenever the functional component rendered
        console.log("ReactHooks useEffect called")

        // optionally useEffect can return a function that can be called automatically to clean the resource
        return () => {
            // is involved the component is unmounted
            console.log("ReactHooks unmount, clean resource")
        }
    }, []);

    return ( <>
                <View>
                    <Text>React Hooks</Text>    
                     <Text>Counter {counter}</Text>
                     <Button title="+1" onPress={ ()=> setCounter( counter + 1) } />
                     
                     <Button title="A +1 " onPress={ ()=> setA( a + 1) } />

                     <Button title="B +1" onPress={ ()=> setB( b + 1) } />
                     <Text> C is {c}</Text>
                </View> 
            </> );
}
 
export default HookExample;