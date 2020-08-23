/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import fakeData from '../../fakeData';
import './Shop.css';

const Shop = () => {
    const first10Products = fakeData.slice(0,10);
    console.log(first10Products)

    const [products, setProducts] = useState(first10Products);

    return (

        <div className="shop-container">
            <div className="product-container">
                <ul> {
                    products.map(product => <li>{product.name}</li>)
                    } 
                </ul>
            </div>
            <div className="cart-container">
                <p>This is Cart</p>
            </div>
        </div>
    );
};

export default Shop;