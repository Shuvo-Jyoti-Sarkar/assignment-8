import React from 'react';
import './Product.css';

const Product = (props) => {
    const { name, img, price, id } = props.product;
    const { handleAddToCart } = props;
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-info'>
                <h3>{name}</h3>
                <h4>Price: ${price}</h4>
                <p>ID: {id}</p>
            </div>
            <button onClick={() => handleAddToCart(props.product)} className='btn-cart'>
                <p>ADD TO CART</p>
            </button>
        </div>
    );
};

export default Product;