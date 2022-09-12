import React from 'react';
import ListOfGifs from '../components/ListOfGifs';
import { CardGroup, Row } from 'react-bootstrap';

function MarketPage() {
    return (
        <div className='App'>
            <Row xs={1} md={5} className="g-1">
                <ListOfGifs keyword='pugs' />
            </Row>
        </div>
    );
}

export default MarketPage;