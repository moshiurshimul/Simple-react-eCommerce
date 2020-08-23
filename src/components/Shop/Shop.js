/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import fakeData from '../../fakeData';
import './Shop.css';
import Product from '../Product/Product';

const Shop = () => {
    const first10Products = fakeData.slice(0,10);
    // console.log(first10Products)

    const [products, setProducts] = useState(first10Products);

    return (

        <div className="shop-container">
            <div className="product-container">
                {
                    products.map(product => <Product productData={product}></Product>)
                } 
            </div>
            <div className="cart-container">
                <p>This is Cart</p>
            </div>
        </div>
    );
};

export default Shop;