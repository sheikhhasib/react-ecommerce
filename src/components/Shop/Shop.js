import React, { useState ,useEffect } from 'react';
import fakeData from '../../fakeData';
import Product from '../Product/Product';

const Shop = () => {
    const [products,setProduct] = useState([]);
    useEffect(()=>{
        setProduct(fakeData)
    },[])
    const productReview = (product) => {
        console.log('connect this page : ',{product});
    }
    return (
        <div className="col-md-12 pl-5 bg-secondary">
          <div className="col-md-11 m-auto ">
            <Product products={products} key={products.keys} productReview={productReview}></Product>
          </div>
        </div>
    );
};

export default Shop;