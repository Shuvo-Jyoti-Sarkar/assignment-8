import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Laptop.css';

const Laptop = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);

    const handleAddToCart = (product) => {
        console.log(product);
    }

    return (
        <div className='laptop-container'>
            <div className="products-container">
                {
                    products.map(product => <Product
                        key={product.id}
                        product={product}
                        handleAddToCart={handleAddToCart}
                    ></Product>)
                }
            </div>
            <div className="cart-container">
                <h3>Selected Laptops</h3>
            </div>
        </div>
    );
};

export default Laptop;