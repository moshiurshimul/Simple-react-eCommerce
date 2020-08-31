import React from 'react';
import './ReviewItem.css';

const ReviewItem = (props) => {
    // console.log(props.product)
    const {name, quantity, price, img, key} = props.product;
    return (
        <div className="review-item">
            <div>
                <img src={img} alt=""/>
            </div>
            <div className="items">
                <h2>Item Name: {name}</h2>
                <span className="product-price">${price}</span>
                <p className="product-quantity">Quantity: {quantity}</p>
                <button onClick={() => props.removeHandle(key)} className="product-btn">Remove</button>
            </div>
        </div>
    );
};

export default ReviewItem;