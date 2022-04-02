import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Laptop.css';

const Laptop = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    return (
        <div className='laptop-container'>
            <div className="products-container">
                {
                    products.map(product => <Product
                        key={product.id}
                        product={product}
                    ></Product>)
                }
            </div>
            <div className="cart-container">
                <h3>Selected Clothes</h3>
            </div>
        </div>
    );
};

export default Laptop;