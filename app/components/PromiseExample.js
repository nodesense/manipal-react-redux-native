import { ThemeProvider } from '@react-navigation/native';
import React, { Component } from 'react';

import {View, Text, Button} from 'react-native';

class PromiseExample extends Component {
    constructor(props) {
        super(props);
        this.state = { result: undefined    }
    }

    generateCouponWontWork = () => {
        // async, after 2 seconds
        // result should be returned if even 
        // error should be given in case of odd
        console.log("generateCoupon called")
        setTimeout( () => {
            console.log("generating number now")
            const n = Math.ceil(Math.random() * 100);
            console.log("N is ", n)
            if (n % 2 == 0) {
                return n;
            }
            else {
                return -1;
            }
        }, 2000)

        console.log("generateCoupon exit")
    }

    generateCoupon  = () => {
        // async, after 2 seconds
        // result should be returned if even 
        // error should be given in case of odd
        
        // since we cannot give answer immediately, we cannot block the call
        // no sleep statement, no wait, as this is single thread
        // create a promise and return promise.
        // the caller will hold the promise until it result or rejection
        const promise = new Promise((resolve, reject) => {
            // async code in case custom promise
            console.log("promise Callback ")
            setTimeout( () => {
                 const n = Math.ceil(Math.random() * 100);
                console.log("generateCoupon N is ", n)
                if (n % 2 == 0) {
                    // resolve, got result
                    resolve(n);
                }
                else {
                    // reject
                    reject(new Error("Could not generate coupon.."))
                }
            }, 2000)
        });

        return promise;
    }

    // let us return a promise
    getCouponSync = () => {
        const n = Math.ceil(Math.random() * 100);
        console.log("getCouponSync N is ", n)
        if (n % 2 == 0) {
            // resolve, got result
            // create promise object and immediately resolve with n
            return Promise.resolve(n) 
        }
        else {
            // reject
           return Promise.reject(new Error("Could not generate"))
        }
    }


    getCoupon = () => {
        // const promise = this.generateCoupon()
        const promise = this.getCouponSync()
         
        promise.then( (result ) => {
            console.log("Got the result ", result)
        })
        .catch ((err) => {
            console.log("Got the error", err)
        })
    }

    getCouponAll = () => {
        Promise.all([
            this.getCouponSync(), // sync with promise enabled
            this.generateCoupon() // async
        ])
        .then (results => { // if both/all the promises resolved
            console.log("results", results)
            console.log("results[0]", results[0]) // from getCouponSync
            console.log("results[1]", results[1]) // getCoupon
        })
        .catch (error => { // if any one of the promise fails 
            console.log("getCoupon all error ", error)
        })
    }

    getCouponNested = () => {
        this.getCouponSync()
        .then (result => { 
            console.log("result", result)
            this.generateCoupon()
            .then ( c => {

            })
            .catch ( error => {

            })
        })
        .catch (error => { // if any one of the promise fails 
            console.log("getCoupon all error ", error)
        })
    }

    //async, await are keyword from es7
    // useful to implement promise code readable
    // babel will convert async and await to promise then and catch
    getCouponNestedAsync = async () => {
        try {
            // this code is still async only, no blocking
            // babel/es7 to make code readable
            const n = await this.generateCoupon();
            // do something with n
            const m = await this.getCouponSync(); 
            console.log("n. m ", n, m)
        }catch (error) {
            console.log("Error ", error)
        }
    }


    render() { 
        return ( 
        <>
            <View>
                <Text>Promise Example</Text>
                <Button title="getCoupon" onPress={this.getCoupon}></Button>
                <Button title="getCouponAll" onPress={this.getCouponAll}></Button>
                <Button title="getCouponNestedAsync" 
                        onPress={this.getCouponNestedAsync}>
                        
                </Button>
            </View>
        </>  );
    }
}
 
export default PromiseExample;