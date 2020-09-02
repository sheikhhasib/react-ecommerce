import React from 'react';
import { useParams } from 'react-router-dom';
import fakeData from '../../fakeData';
import { CardDeck, Card } from 'react-bootstrap';

const ProductDetails = () => {
    const { productKey } = useParams();
    const product = fakeData.find(pd => pd.key === productKey);
    return (
        <>
            <div className="col-md-4 m-auto">
            <CardDeck className="p-5 mt-5">
                <Card>
                <Card.Img className="p-5" variant="top" src={product.img}/>
                    <Card.Body>
                        <Card.Text>
                            <h4>{product.name}</h4>
                        </Card.Text>
                        <Card.Text>
                            <h3>${product.price}</h3>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </CardDeck>
            </div>
        </>
    );
};

export default ProductDetails;