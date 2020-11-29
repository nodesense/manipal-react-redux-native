import * as ActionTypes from '../action-types';

export const  addProductToCart = (product) => ({
    type: ActionTypes.ADD_ITEM,
    payload: {
        item: {id: product.id, 
               name: product.name, 
               price: product.price,
               qty: 1}
    }
})

// to be dispatched to redux
// thunk will intercept this
export function fetchProducts() {
    // returning a function as an action ,instead of object as a action
    // intercepted by thunk middleware, and thunk shall call this function,
    // pass dispatch and getState method
    return function asyncFetchProducts(dispatch, getState) {
        // async/timer specific
        // using thunk, you bring apis calls into actions instead of writing them in component
       // fetch("http://192.168.1.3:7070/api/products")
        fetch("http://192.168.1.3:8080/products")
        .then (response => response.json())
        .then (products => {
            // set the products to store
            // from store, teh view will get data
            dispatch(setProducts(products));
        })
    }
}

export const setProducts = (products) => ({
    type: ActionTypes.SET_PRODUCTS,
    payload: {products}
})

export const loadingProducts = (loading) => ({
    type: ActionTypes.LOADING_PRODUCTS,
    loading
})