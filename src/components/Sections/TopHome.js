import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const Banner = () => {
    return (
        <Container fluid className='dark'>
            <Row>
                <Col>
                    <img src='https://via.placeholder.com/900x500.png?text=Lorem+ipsum+dolor+sit+amet' className='mx-auto d-block' alt="placeholder" />
                </Col>
            </Row>
        </Container>)
}

export default Banner;