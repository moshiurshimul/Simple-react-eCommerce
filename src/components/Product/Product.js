/* eslint-disable no-unused-vars */
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Product.css';

const Product = (props) => {
    console.log(props.productData)
    const {name, img, seller, stock, price} = props.productData;
    return (
        <div className="products">
            <div>
            <img src={img} alt=""/>
            </div>
            <div className="single-product-details">
            <h4 className="product-name">{name}</h4>
            <p className="small-details">Sold By: {seller}</p>
            <p className="price">${price}</p>
            <p className="small-details">only {stock} left in stock - order soon</p>
            <button className="product-btn"><FontAwesomeIcon icon={faShoppingCart} />add to cart</button>
            </div>

        </div>
    );
};

export default Product;