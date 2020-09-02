import React, { useState, useEffect } from 'react';
import { getDatabaseCart, removeFromDatabaseCart, processOrder } from '../../utilities/databaseManager';
import fakeData from '../../fakeData';
import ReviewDetails from '../ReviewDetails/ReviewDetails';
import Cart from '../Cart/Cart';

const Review = () => {
    const [cart, setCart] = useState([]);
    const removeProduct = (productKey) =>{
        const newCart = cart.filter(product => product.key !== productKey);
        setCart(newCart);
        removeFromDatabaseCart(productKey);
    }

    const handleCheckout = () =>{
        setCart([]);
        processOrder();
    }
    useEffect(() => {
        const savedCart = getDatabaseCart()
        const productKeys = Object.keys(savedCart);
        const cartProduct = productKeys.map(key => {
            const product = fakeData.find(pd => pd.key === key);
            product.quantity = savedCart[key];
            return product;
        })
        setCart(cartProduct)
    }, [])
    const ReviewDetailsStyle = {
        borderRight: '1px solid white',
    }
    return (
        <div className="col-md-12 bg-secondary">
            <div className="row">
                <div className="col-md-9 pt-2" style={ReviewDetailsStyle}>
                    {
                        cart.map(product => <ReviewDetails product={product} removeProduct={removeProduct}></ReviewDetails>)
                    }
                </div>
                <div className="col-md-3 pt-4">
                    <Cart cart={cart} handleCheckout={handleCheckout}></Cart>
                </div>
            </div>
        </div>
    );
};

export default Review;