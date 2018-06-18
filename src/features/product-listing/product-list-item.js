import React from 'react'

const ProductListItem = (props) => {
    return (
        <div>
            <h3>{props.product.name}</h3>

            <img
                height={100}
                title={props.product.name}
                src={`/products/${props.product.image}`}
                alt={''}
            />
            <div>{props.product.description}</div>
            <div>${props.product.price}</div>
            <div>
                <button onClick={() => props.addToCart(props.product)}>Add to cart</button>
            </div>
        </div>
    )
};

export default ProductListItem;