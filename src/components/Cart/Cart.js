import React from 'react';
import './Cart.css';
import { Link } from 'react-router-dom';

const Cart = (props) => {
    const cart = props.cart;
    let total = 0;

    for (let i = 0; i< cart.length; i++) {
        const product = cart[i];
        total = total + (product.price * product.quantity)
    }

    let shipping = 0;

    if(total > 50) {
        shipping = 0;
    }
    else if(total > 0){
        shipping = 9.99;
    }

    let GrandTotal = (total + shipping).toFixed(2)

    return (
        <div className="cart">
            <h2>Cart Details</h2>
            <h3>Order Summary</h3>
            <p>Item Ordered: {cart.length}</p>
            <p>Item Price: ${total.toFixed(2)}</p>
            <p>Shipping fee: ${shipping}</p>
            <p className="grand-total">Grand Total : {GrandTotal}</p>
            <Link to="/review"><button className="product-btn">Review items</button></Link>
        </div>
    );
};

export default Cart;