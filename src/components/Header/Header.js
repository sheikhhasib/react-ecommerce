import React, { useState, useEffect, useContext } from 'react';
import logo from '../../images/logo.jpg';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import { Navbar, Nav, Form, FormControl, Button, Container } from 'react-bootstrap';
import { getDatabaseCart } from '../../utilities/databaseManager';
import fakeData from '../../fakeData';
import { CartContext } from '../../App';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'




const Header = () => {
    const [cart] = useContext(CartContext);
    const [cartData, setCartData] = useState([]);
    useEffect(() => {
        const savedCart = getDatabaseCart()
        const productKeys = Object.keys(savedCart);
        const cartProduct = productKeys.map(key => {
            const product = fakeData.find(pd => pd.key === key);
            product.quantity = savedCart[key];
            return product;
        })
        setCartData(cartProduct)
    }, [])
    let cartValue = cartData.length + cart.length;
    if(cartValue === cartData.length){
        cartValue = cartData.length;
    }
    return (
        <>
        <Container>
            <Navbar bg="dark" variant="dark" fixed="top" className="px-5">
                <Navbar.Brand><img src={logo} alt=""/></Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link>
                        <Link className="text-decoration-none text-light" to="/home">Home</Link>
                    </Nav.Link>
                    <Nav.Link ><Link className="text-decoration-none text-light" to="/shop">Shop</Link></Nav.Link>
                </Nav>
                <Form inline>
                    <Link className="text-decoration-none text-light" to="/review">
                        <Button variant="outline-warning"><FontAwesomeIcon icon={ faShoppingCart }/>--{cartValue}</Button>
                    </Link>
                </Form>
            </Navbar>
        </Container>
        </>
    );
};

export default Header;