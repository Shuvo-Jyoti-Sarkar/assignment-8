import React from 'react';

const Product = (props) => {
    const { name, img, price, id } = props.product;
    return (
        <div className='product'>
            <img src={img} alt="" />
            <h3>{name}</h3>
            <p>Price: {price}</p>
            <p>ID: {id}</p>
        </div>
    );
};

export default Product;