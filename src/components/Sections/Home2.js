import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const HomeFeature = () => {
    return (
        <>
            <Container fluid>
                <Row>
                    <Col>
                    <Row> <h1> Featured story </h1> </Row>
                        <Row><img src="https://via.placeholder.com/500x300.png" alt='placeholder' /></Row>
                        <Row> <h2> Elementum integer enim neque</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Fringilla urna porttitor rhoncus dolor purus non enim praesent.</p></Row>

                    </Col>
                    <Col>
                        <h1>Trending</h1>
                        <Row>
                            <img src="https://via.placeholder.com/128x128.png" alt="placeholder"/>
                            <h2>id diam vel quam</h2></Row>
                        <Row>
                            <img src="https://via.placeholder.com/128x128.png" alt="placeholder"/>
                            <h2>id diam vel quam</h2></Row>
                        <Row>
                            <img src="https://via.placeholder.com/128x128.png" alt="placeholder"/>
                            <h2>id diam vel quam</h2></Row>
                </Col>
                </Row>
            </Container>
        </>)
}

export default HomeFeature;