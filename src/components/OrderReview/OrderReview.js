import React, { useEffect } from 'react';
import { getDatabaseCart, removeFromDatabaseCart, processOrder } from '../../utilities/databaseManager';
import fakeData from '../../fakeData'
import { useState } from 'react';
import ReviewItem from '../ReviewItem/ReviewItem';
import Cart from '../Cart/Cart';
import './OrderReview.css';
import happyImg from '../../images/giphy.gif';

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

    // When order successfully placed
    const [placedOrder, setPlacedOrder] = useState(false);
    const handleOrderPlaced = () => {
        // console.log('clicked')
        setCart([]);
        setPlacedOrder(true);
        processOrder();
        
    }

    let thankYou;
    if (placedOrder){
        thankYou = <img src={happyImg} alt=""/>
    }

    return (
        <div className="order-review-container">
            <div className="order-items">
            {
                cart.map(pd => <ReviewItem key={pd.key} product={pd} removeHandle={removeHandle}></ReviewItem>)
            }
            {thankYou}
            </div>
            <div className="cart-container">
                <Cart cart={cart}>
                    <button onClick={handleOrderPlaced} className="product-btn">Place Order</button>
                </Cart>

            </div>
        </div>
    );
};

export default OrderReview;