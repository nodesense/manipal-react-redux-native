import React, { Component } from 'react';
import {View, Text, Button, TextInput} from 'react-native';
import {Subject} from 'rxjs';
import {map, filter, debounceTime} from 'rxjs/operators';


// ref - reference
// react web - Ref to obtain real dom reference
// react native -ref to obtain the actual control behind the ui
// FIXME: some research

class RxJsExample extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            searchText: ''
         }

        this.searchControl = React.createRef();

        this.nextNum$ = new Subject();
        // susbcribe is considered to be observer/listener
        this.nextNum$.subscribe( n => {
            console.log("Subsribe ", n)
        })

        this.search$ = new Subject();
        this.orderProduct$ = new Subject();

        this.search$
            .pipe (map ( (value) => value.trim() ) )
            .pipe (filter ( value => !!value )) // !! truthy or false
            .pipe (filter (value => value.length >= 3))
            .pipe (debounceTime(400)) // 300 to 600 ms
            .subscribe( value => {
                console.log("Calling API for***" + value + "**")
                // code to make api call
            })

        this.orderProduct$
            .pipe (debounceTime(1000))
            .subscribe( () => {
                console.log("Ordering product using api")
            })
    }

    searchNow = (value) => {
        this.setState({searchText: value});
        console.log("Search text changed ", value)
        this.search$.next(value)
    }

    orderProduct = () => {
        console.log("Ordering button clicked start")
        this.orderProduct$.next(1); // we don't care value here
    }

    publish = () => {
        this.nextNum$.next(Math.random())
    }

    componentDidMount() {
        // current in react web - represent teh actual DOM element
        // in react native, current means the wrapper object for the native control
        console.log("Component did mount, focus call")
        this.searchControl.current.focus()
    }

    render() { 
        return ( <>
                <View >
                    <Text>Search</Text>
                    <TextInput onChangeText={this.searchNow}
                               value={this.state.searchText} 
                               ref={this.searchControl}
                               
                               />
                    <Button onPress={this.orderProduct} title="Order Product">
                    </Button>

                    <Button onPress={this.publish} title="Publish" />
                </View>

            </>
         );
    }
}
 
export default RxJsExample;

