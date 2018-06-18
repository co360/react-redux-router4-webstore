import React from 'react';
import ProductListing from '../features/product-listing';
import data from '../data/mock-products.json';

const  Home = (props) => {
    return (
        <div>
            <h1>this is the home page</h1>
            <ProductListing products={data.products}/>
        </div>
    )
}

export default Home;