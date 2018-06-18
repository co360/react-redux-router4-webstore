import React from 'react';
import ProductListItem from './product-list-item';
import {connect} from 'react-redux';

const ProductListing = (props) => {
    return (
        <div>
            {
                props.products.map(product =>
                    <ProductListItem
                        product={product}
                        addToCart={props.addToCart}
                    />)
            }
        </div>
    )
};

function mapStateToprops(state){
    return{
        cart: state.cart
    }
}

function mapDispatchToProps(dispatch){
    return{
        addToCart:(item) => {
            dispatch({type: 'ADD', payload: item})
        },
        removeFromCart: (item) => {
            dispatch({type: 'REMOVE', payload: item})
        }
    }
}

export default connect(mapStateToprops, mapDispatchToProps)(ProductListing);