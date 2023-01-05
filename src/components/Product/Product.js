import React from 'react';
import './Product.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import Rating from 'react-rating';


const Product = (props) => {
    // console.log(props);
    const {img, name, seller, price, stock, star}= props.product;
    const element = <FontAwesomeIcon icon={faShoppingCart} />

    
    return (
        <div className='product'>
                <div>
                    <img src={img} alt="" />
                </div>
             <div>
                <h4 className='product-name'>{name}</h4>
                <p><small>by: {seller}</small></p>
                <h5>${price}</h5>
                <p><small>only {stock} left in stock - order soon</small></p>
                <Rating 
                initialRating={star}
                emptySymbol="far fa-star icon-color"
                fullSymbol="fas fa-star icon-color"></Rating> <br />
                <button 
                onClick={()=>props.handleAddToCart(props.product)} 
                className='btn-regluar'> <FontAwesomeIcon icon={faShoppingCart}/>  add to cart</button>
             </div>

             
        </div>
    );
};

export default Product;