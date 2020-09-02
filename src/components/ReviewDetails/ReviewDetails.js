import React from 'react';
import { CardDeck, Card, Button } from 'react-bootstrap';

const ReviewDetails = (props) => {
    const {name,price,quantity,key} = props.product;
    const removeProduct = props.removeProduct;
    return (
        <>
            <CardDeck className="mt-3 text-center">
                <Card>
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <Card.Text>
                            <h3>$ {price}</h3>
                        </Card.Text>
                        <Card.Text>
                            <h4>Quantity : {quantity}</h4>
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <Button variant="warning" onClick={() => removeProduct(key)} className="px-5">Remove Cart</Button>
                    </Card.Footer>
                </Card>
            </CardDeck>
        </>
    );
};

export default ReviewDetails;