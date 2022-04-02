import React from 'react';
import './Product.css';

const Product = (props) => {
    const { name, img, price, id } = props.product;
    return (
        <div className='product'>
            <img src={img} alt="" />
            <h3>{name}</h3>
            <h4>Price: {price}</h4>
            <p>ID: {id}</p>
        </div>
    );
};

export default Product;