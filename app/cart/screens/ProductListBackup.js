import React, { Component } from 'react';
import {View, VirtualizedList, Text} from 'react-native';

const Item = ({item}) => {
    return ( <>
                <View>
                    <Text>{item.name}</Text>
                    <Text>{item.price}$</Text>
                    <Text>Year {item.year}</Text>
                </View>
             </> );
}
  

class ProductList extends Component {
    constructor(props) {
        super(props);
        this.state = { products: [] }
    }

    componentDidMount() {
        // to make API call to get the data
        // FIXME: move to config file later
        fetch("http://192.168.1.3:7070/api/products")
        .then (response => response.json())
        .then (products => {
            this.setState({products})
        })
    }

    // props.item
    render() { 
        return ( <>
                    <View>
                        <Text>Product List</Text>
                        <Text> Total Products {this.state.products.length}</Text>
 
                        <VirtualizedList 
                            data = {this.state.products}
                            renderItem = { ({item}) => <Item item={item} /> }
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