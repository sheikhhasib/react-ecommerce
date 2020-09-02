import React from 'react';
import { CardDeck, Card, Button } from 'react-bootstrap';

const Cart = (props) => {
    const cart = props.cart;
    const handleCheckout = props.handleCheckout;
    let total = 0;
    for(let i = 0; i < cart.length; i++) {
        const product = cart[i];
        total = total + (product.price * product.quantity);
    }

    return (
        <div>
            <CardDeck>
                <Card>
                    <Card.Header>
                        <Card.Title>Cart</Card.Title>
                    </Card.Header>
                    <Card.Body>
                        <Card.Text>
                            <h4>Total products : {cart.length}</h4>
                        </Card.Text>
                        <Card.Text>
                            <h3>Total Price : ${total.toFixed(2)}</h3>
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <Button variant="warning" onClick={handleCheckout} className="px-5">CeckOut</Button>
                    </Card.Footer>
                </Card>
            </CardDeck>
        </div>
    );
};

export default Cart;