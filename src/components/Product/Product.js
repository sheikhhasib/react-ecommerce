import React from 'react';
import Columns from 'react-columns';
import { CardDeck, Card, Button } from 'react-bootstrap';
const Product = (props) => {
    const products = props.products;
    const Product = products.map(product => {
        const {img,name,price,category} = product;
        return(
            <div className="col-md-11">
                <CardDeck className="mt-5 text-center">
                <Card>
                <Card.Img className="p-5" variant="top" src={img} width="100%"  />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                    <h3>$ {price}</h3>
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <Button variant="warning" onClick={() => props.addedProduct(product) } className="px-5">Add to Cart</Button>
                </Card.Footer>
                </Card>
            </CardDeck>
            </div>
        )
    })
    let queries = [{
        columns: 2,
        query: 'min-width: 500px'
      }, {
        columns: 4,
        query: 'min-width: 1000px'
      }];
    return (
        <div>
            <Columns queries={queries}>{Product}</Columns>
        </div>
    );
};

export default Product;