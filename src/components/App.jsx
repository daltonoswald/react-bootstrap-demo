import { Link } from 'react-router-dom';
import { Container, Row, Col, Button, Alert, Breadcrumb, Card, Form } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavHeader from './NavHeader';

function App() {

  return (
    <>
     <div className="App">
      <NavHeader />
        <Container>
          <Form>
            <Row>
              <Col md>
                <Form.Group controlId='formEmail'>
                  <Form.Label>Email Address</Form.Label>
                  <Form.Control type='email' placeholder='example@email.com' />
                  <Form.Text className='text-white'>We will never share your email address.</Form.Text>
                </Form.Group>
              </Col>
              <Col md>
                <Form.Group controlId='formPassword'>
                  <Form.Label>Password</Form.Label>
                  <Form.Control type='password' placeholder='Pa$Sw0rD'/>
                </Form.Group>
              </Col>
            </Row>
            <Button variant='info' type='submit'>Login</Button>
          </Form>
          <Breadcrumb>
            <Breadcrumb.Item>Test 1</Breadcrumb.Item>
            <Breadcrumb.Item active>Test 2</Breadcrumb.Item>
            <Breadcrumb.Item>Test 3</Breadcrumb.Item>
          </Breadcrumb>
          <Alert variant='danger'>This is a button</Alert>
          <Button>Test Button</Button>
        </Container>
    </div>
    </>
  )
}

export default App
