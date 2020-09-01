import React, { useState ,useEffect } from 'react';
import fakeData from '../../fakeData';
import Product from '../Product/Product';
import { addToDatabaseCart } from '../../utilities/databaseManager';

const Shop = () => {
    const [products,setProduct] = useState([]);
    const [cart,setCart] = useState([]);
    useEffect(()=>{
        setProduct(fakeData)
    },[])
    
    const addedProduct = (product) => {
        const toBeAddedKey = product.key;
        const sameProduct = cart.find(pd => pd.key === toBeAddedKey);
        let count = 1;
        let newCart ;
        if(sameProduct){
            count = sameProduct.quantity + 1;
            sameProduct.quantity = count;

            const others = cart.filter(pd => pd.key !== toBeAddedKey);
            newCart = [...others, sameProduct];
        }else{
            product.quantity = 1;
            newCart = [...cart,product]
        }
        setCart(newCart);
        addToDatabaseCart(product.key,count);
    }
    return (
        <div className="col-md-12 pl-5 bg-secondary">
          <div className="col-md-11 m-auto ">
            <Product products={products} key={products.keys} addedProduct={addedProduct}></Product>
          </div>
        </div>
    );
};

export default Shop;