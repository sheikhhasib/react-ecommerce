import React, { createContext, useState } from 'react';
import './App.css';
import Shop from './components/Shop/Shop';
import Header from './components/Header/Header';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Slider from './components/Slider/Slider';
import Review from './components/Review/Review';
import ProductDetails from './components/productDetails/ProductDetails';



export const CartContext = createContext();

function App() {
  const [cart,setCart] = useState([]);
  return (
    <CartContext.Provider value={[cart,setCart]}>
      
      <Router>
        <Switch>
          <Route path="/home">
            <Header></Header>
            <Slider></Slider>
          </Route>
          <Route exact path="/">
            <Header></Header>
            <Slider></Slider>
          </Route>
          <Route path="/shop">
            <Header></Header>
            <Slider></Slider>
            <Shop></Shop>
          </Route>
          <Route path="/review">
            <Header></Header>
            <Review></Review>
          </Route>
          <Route path="/product/:productKey">
            <Header></Header>
            <ProductDetails></ProductDetails>
          </Route>
        </Switch>
      </Router>
    </CartContext.Provider>
  );
}

export default App;
