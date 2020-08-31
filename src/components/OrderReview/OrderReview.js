import React, { useEffect } from 'react';
import { getDatabaseCart, removeFromDatabaseCart } from '../../utilities/databaseManager';
import fakeData from '../../fakeData'
import { useState } from 'react';
import ReviewItem from '../ReviewItem/ReviewItem';

const OrderReview = () => {
    const [cartitem, setCartItem] = useState([]);

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

        setCartItem(cartProducts);

    }, []);

    // Removing item from cart and database
    const removeHandle = (removeitemkey) => {
        const newCart = cartitem.filter(pd => pd.key !== removeitemkey);
        setCartItem(newCart);
        removeFromDatabaseCart(removeitemkey);
    }
    return (
        <div>
            <h1>Order Details: {cartitem.length}</h1>
            {
                cartitem.map(pd => <ReviewItem key={pd.key} product={pd} removeHandle={removeHandle}></ReviewItem>)
            }
        </div>
    );
};

export default OrderReview;