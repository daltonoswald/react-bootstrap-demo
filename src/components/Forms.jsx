import { Container, Form, Row, Col, Button, FloatingLabel, InputGroup } from 'react-bootstrap';
import NavHeader from './NavHeader';

export default function Forms() {

    return (
        <div className='app'>
            <NavHeader />
            <Container>
                <Form>
                <Row>
                <Col md>
                    <Form.Group controlId='formEmail'>
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control type='email' placeholder='example@email.com' />
                    <Form.Text className='text-black'>We will never share your email address.</Form.Text>
                    </Form.Group>
                </Col>
                <Col md>
                    <Form.Group controlId='formPassword'>
                    <Form.Label>Password</Form.Label>
                    <Form.Control type='password' placeholder='Pa$Sw0rD'/>
                    </Form.Group>
                </Col>
                </Row>
                <hr className='my-3' />
                <Row>
                    <Form.Label>Floating Inputs</Form.Label>
                    <Col md>
                        <FloatingLabel
                            controlId='floatingInput'
                            label='First Name'
                            className='m-2'
                        >
                            <Form.Control type='text' placeholder='Firsst Name' />
                        </FloatingLabel>
                    </Col>
                    <Col md>
                        <FloatingLabel
                            controlId='floatingInput'
                            label='Last Name'
                            className='m-2'
                        >
                            <Form.Control type='text' placeholder='Last Name' />
                        </FloatingLabel>
                    </Col>
                </Row>
                <FloatingLabel
                    controlId='floatingTextarea'
                    label='Comments'
                    className='m-2'
                >
                    <Form.Control as='textarea' placeholder='Leave a comment here' />
                </FloatingLabel>
                <FloatingLabel controlId='floatingSelect' label='This is a floating select'>
                    <Form.Select aria-label='Floating label select example'>
                        <option value='1'>One</option>
                        <option value='2'>Two</option>
                        <option value='3'>Three</option>
                    </Form.Select>
                </FloatingLabel>
                <Form.Label>Balance the form to be 30-70</Form.Label>
                <Form.Range />
                <Form.Group controlId='formBasicCheckbox' className='my-2'>
                    <Form.Check type='checkbox' label='Sign up for our Newsletter' />
                </Form.Group>
                <InputGroup className='my-3'>
                    <InputGroup.Text id='basic-addon1'>@</InputGroup.Text>
                    <Form.Control
                        placeholder='Username'
                        aria-label='Username'
                        aria-describedby='basic-addon1' />
                </InputGroup>
                <InputGroup className='my-3'>
                    <Form.Control
                        placeholder='Email'
                        aria-label='Email'
                        aria-describedby='basic-addon2' />
                    <InputGroup.Text id='basic-addon2'>@example.com</InputGroup.Text>
                </InputGroup>
                <Button variant='info' type='submit'>Sign up</Button>
            </Form>
            </Container>
        </div>
    )
}