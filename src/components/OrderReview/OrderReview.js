import React, { useEffect } from 'react';
import { getDatabaseCart, removeFromDatabaseCart } from '../../utilities/databaseManager';
import fakeData from '../../fakeData'
import { useState } from 'react';
import ReviewItem from '../ReviewItem/ReviewItem';
import Cart from '../Cart/Cart';
import './OrderReview.css';

const OrderReview = () => {
    const [cart, setCart] = useState([]);

    // Collect item data from Database
    useEffect(() => {
        const savedCart = getDatabaseCart();
        const productKeys = Object.keys(savedCart);
        
        //Finding Product using Key
        const cartProducts = productKeys.map(key => {
            const product = fakeData.find(product => product.key === key);
            product.quantity = savedCart[key];
            return product;
        });

        setCart(cartProducts);

    }, []);

    // Removing item from cart and database
    const removeHandle = (removeitemkey) => {
        const newCart = cart.filter(pd => pd.key !== removeitemkey);
        setCart(newCart);
        removeFromDatabaseCart(removeitemkey);
    }
    return (
        <div className="order-review-container">
            <div className="order-items">
            {
                cart.map(pd => <ReviewItem key={pd.key} product={pd} removeHandle={removeHandle}></ReviewItem>)
            }
            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default OrderReview;