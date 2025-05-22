import { Card, Col, Container, Image, Row } from 'react-bootstrap';
import NavHeader from './NavHeader';
import yuppies from '../assets/yuppies.jpg'
import rocket from '../assets/rocket.png'

export default function Images() {

    return (
        <div className='app'>
            <NavHeader />
            <Container>
                <Row className='w-50 mx-auto' >
                    <Col xs={6} md={4} className='my-auto mx-auto' >
                        <p>This image has a rounded prop.</p>
                        <Image src={rocket} rounded />
                    </Col>
                    <Col xs={6} md={4} className='my-auto mx-auto' >
                        <p>This image has a rounded circle prop.</p>
                        <Image src={rocket} roundedCircle />
                    </Col>
                    <Col xs={6} md={4} className='my-auto mx-auto' >
                        <p>This image has a thumbnail prop.</p>
                        <Image src={rocket} thumbnail />
                    </Col>
                </Row>
            </Container>
            <Container className='mt-4'>
                <Card className='mb-3 w-50 mx-auto' bg='success' text='light' border='dark' >
                    <Card.Header>Images</Card.Header>
                    <Card.Body>
                        <Card.Text>This card has images.</Card.Text>
                        <Row>
                            <Col className='my-auto mx-auto'>
                                <Image src={rocket} rounded />
                            </Col>
                            <Col className='my-auto mx-auto'>
                                <Image src={rocket} roundedCircle />
                            </Col>
                            <Col className='my-auto mx-auto'>
                                <Image src={rocket} thumbnail />
                            </Col>
                        </Row>
                    </Card.Body>
                </Card>
            </Container>
        </div>
    )
}