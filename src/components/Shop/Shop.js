import React, { useState } from 'react';
import fakeData from '../../fakeData';
import './Shop.css';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
import { addToDatabaseCart, getDatabaseCart } from '../../utilities/databaseManager';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Shop = () => {
    const first10Products = fakeData.slice(0,10);
    const [products, setProducts] = useState(first10Products);

    const [cart, setCart] = useState([]);
    
    // find product from loacl storage
    useEffect(() => {
        const savedCart = getDatabaseCart();
        const productKeys = Object.keys(savedCart);
        const previousCart = productKeys.map( existingKey => {
            const product = fakeData.find(pd => pd.key === existingKey);
            // console.log(product)
            product.quantity = savedCart[existingKey];
            return product;
        })
        setCart(previousCart);
    }, [])

    //Button click
    const productHandleClick = (product) => {
        const sameProduct = cart.find(pd => pd.key === product.key)
        let count = 1;
        let newCart;
        if(sameProduct) {
            count = sameProduct.quantity + 1
            sameProduct.quantity = count;
            const others = cart.filter(pd => pd.key !== product.key);
            newCart = [...others, sameProduct]
            setCart(newCart);
        }
        else {
            product.quantity = 1;
            const newCart = [...cart, product];
            setCart(newCart);
        }
        addToDatabaseCart(product.key, count);
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
                <Cart cart={cart}><Link to="/review"><button className="product-btn">Review items</button></Link></Cart>
            </div>
        </div>
    );
};

export default Shop;