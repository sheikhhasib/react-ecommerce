import React from 'react';
import { Carousel } from 'react-bootstrap';
import iphone from '../../images/iphone.png';
import laptop from '../../images/laptop.jpg';
import shoe from '../../images/shoe.jpg';
const Slider = () => {
    return (
        <>
            <div className="col-md-12 bg-secondary">
            <div className="col-md-8 m-auto">
                <Carousel>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={iphone}
                            alt="First slide"
                            height="600px"
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
                            height="600px"
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
                            height="600px"
                        />

                        <Carousel.Caption>
                            <h3>ALIENWARE GAMING LAPTOPS | Dell USA</h3>
                            <p>only $2000</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
            </div>
        </>
    );
};

export default Slider;