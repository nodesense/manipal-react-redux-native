
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import ProductList from '../screens/ProductList';
import * as actions from '../../state/actions/product.actions';
  

const mapStateToProps = (state) => {
    return {
        // propertyName: value from store
        products: state.product.products,
        loading: state.product.loading
    }
}

// the functions here are dispatcher
// map the dispatch to components props
// dispatch = store.dispatch
 
const mapDispatchToProps = (dispatch) => {
    // all 3 functions are passed to component props
    return {
        fetchProducts: bindActionCreators(actions.fetchProducts, dispatch),
        addProductToCart: bindActionCreators(actions.addProductToCart, dispatch), 
    }
}
    
const ProductListContainer = connect(mapStateToProps, // fetch data from store
                                 mapDispatchToProps // dispatch to store
                                 ) (ProductList); // ProductList component

export default ProductListContainer;