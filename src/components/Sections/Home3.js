import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const Home3 = () => {
    return (
        <>
            <Container fluid className='dark'>
                <Row>
                    <More/>
                    <More/>
                    <More/>
                </Row>
            </Container>
        </>)
}

const More = () => {
    return (
    <Col> 
    <img src='http://via.placeholder.com/300x300' alt='Home3 Placeholder'/>
    <h2>turpis egestas integer eget</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nibh venenatis cras sed felis. Aliquet risus feugiat in ante metus dictum at tempor commodo.</p>
    </Col>
    )
}

export default Home3;