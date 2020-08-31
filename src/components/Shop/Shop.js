/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import fakeData from '../../fakeData';
import './Shop.css';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
import { addToDatabaseCart } from '../../utilities/databaseManager';

const Shop = () => {
    const first10Products = fakeData.slice(0,10);
    const [products, setProducts] = useState(first10Products);

    const [cart, setCart] = useState([]);

    const productHandleClick = (product) => {
        // console.log('clicked', product);
        const newCart = [...cart, product];
        setCart(newCart);
        const sameProducts = newCart.filter(pd => pd.key === product.key);
        const sameProductsCount = sameProducts.length;
        addToDatabaseCart(product.key, sameProductsCount);
    }

    return (

        <div className="shop-container">
            <div className="product-container">
                {
                    products.map(product => <Product 
                        productData={product} 
                        showAddToCart={true} 
                        handleClick={productHandleClick}
                        key={product.key}>
                        </Product>)
                } 
            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;