/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import fakeData from '../../fakeData';
import './Shop.css';
import Product from '../Product/Product';

const Shop = () => {
    const first10Products = fakeData.slice(0,10);
    const [products, setProducts] = useState(first10Products);

    const [cart, setCart] = useState([]);

    const productHandleClick = (product) => {
        console.log('clicked', product);
        const newCart = [...cart, product];
        // console.log(newCart)
        setCart(newCart);
    }

    return (

        <div className="shop-container">
            <div className="product-container">
                {
                    products.map(product => <Product productData={product} handleClick={productHandleClick}></Product>)
                } 
            </div>
            <div className="cart-container">
                <div className="cart-top">
                    <h3>Order Summery</h3>
                    <p>Order item: {cart.length}</p>
                </div>
            </div>
        </div>
    );
};

export default Shop;