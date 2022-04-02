import React from 'react';
import './Cart.css';

const Cart = ({ product }) => {

    return (

        <div className='cart'>
            <h4>{product.name}</h4>
        </div>
    );
};

export default Cart;