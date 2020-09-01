import React from 'react';
import { Navbar, Nav, Form, FormControl, Button, Carousel } from 'react-bootstrap';
import iphone from '../../images/iphone.png';
import laptop from '../../images/laptop.jpg';
import shoe from '../../images/shoe.jpg';
import logo from '../../images/logo.jpg';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
const Header = () => {
    return (
        <div>
            <div className="col-md-12 bg-dark">
                <div className="col-md-11 m-auto">
                    <Navbar bg="dark" variant="dark">
                        <Navbar.Brand href="#home"><img src={logo} alt=""/></Navbar.Brand>
                        <Nav className="mr-auto">
                            <Nav.Link href="#home">
                                <Link to="/home">Home</Link>
                            </Nav.Link>
                            <Nav.Link href="#features"><Link to="/shop">Shop</Link></Nav.Link>
                            <Nav.Link href="#pricing">Pricing</Nav.Link>
                        </Nav>
                        <Form inline>
                            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                            <Button variant="outline-info">Search</Button>
                        </Form>
                    </Navbar>
                </div>
            </div>
            
           <div className="col-md-11 m-auto">
           <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={iphone}
                        alt="First slide"
                        height="800px"
                    />
                    <Carousel.Caption>
                        <h3>iPhone X</h3>
                        <p>only $500</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={shoe}
                        alt="Third slide"
                        height="800px"
                    />

                    <Carousel.Caption>
                        <h3>Shoe</h3>
                        <p>only $60</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={laptop}
                        alt="Third slide"
                        height="800px"
                    />

                    <Carousel.Caption>
                        <h3>ALIENWARE GAMING LAPTOPS | Dell USA</h3>
                        <p>only $2000</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
           </div>
        </div>
    );
};

export default Header;