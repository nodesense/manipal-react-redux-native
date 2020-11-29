import React, { Component } from 'react';
import {View, VirtualizedList, Text, Button} from 'react-native';

const Item = ({item, addProductToCart}) => {
    return ( <>
                <View>
                    <Text>{item.name}</Text>
                    <Text>{item.price}$</Text>
                    <Text>Year {item.year}</Text>
                    <Button title="+Cart" onPress= { () => addProductToCart(item) } />
                </View>
             </> );
} 

class ProductList extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        // dispatch a function instead of action object
        // thunk will execute the function
        this.props.fetchProducts();
    }

    // props.item
    render() { 
        const {products, addProductToCart} = this.props;
        return ( <>
                    <View>
                        <Text>Product List</Text>
                        <Text> Total Products {products.length}</Text>
 
                        <VirtualizedList 
                            data = {products}
                            renderItem = { ({item}) => <Item item={item} addProductToCart={addProductToCart} /> }
                            getItemCount={ (products) => products.length}
                            getItem={ (products, index) => products[index] }
                            keyExtractor = { item => item.id.toString() }
                            initialNumToRender = {6}
                        />
                    </View>
                 </> 
                );
    }
}
 
export default ProductList;