import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const Home4 = () => {
    return (
        <>
            <Container fluid>
            <Section/>
            <Section/>
            </Container>
        </>)
}

const Section = () => {
    return (
    <Row> 
        <Article/>
        <Article/>
    </Row>
    )
}

const Article = () => {
    return (
        <Col> <img src="http://via.placeholder.com/300x100" alt='placeholder'/></Col>
    )
}

export default Home4;