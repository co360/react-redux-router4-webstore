import React from 'react';

const ProductListing = (props) => {
    return (
        <div>
            {
                props.products.map(product => <ProductListItem product={product}/>)
            }
        </div>
    )
}

export default ProductListing;
z