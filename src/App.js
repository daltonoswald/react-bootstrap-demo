import logo from './logo.svg';
import './App.css';
import { Container, Row, Col, Button, Alert, Breadcrumb, Card, Form } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <div className="App">
      <header className="App-header">
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
          <Card className='mb-3' style={{ color: "#000" }}>
            <Card.Img src="http://picsum.photos/200/50" />
            <Card.Body>
              <Card.Title>Card Example</Card.Title>
              <Card.Text>This is an example of React Bootstrap Cards.</Card.Text>
              <Button variant='primary'>Read More</Button>
            </Card.Body>
          </Card>
          <Breadcrumb>
            <Breadcrumb.Item>Test 1</Breadcrumb.Item>
            <Breadcrumb.Item active>Test 2</Breadcrumb.Item>
            <Breadcrumb.Item>Test 3</Breadcrumb.Item>
          </Breadcrumb>
          <Alert variant='danger'>This is a button</Alert>
          <Button>Test Button</Button>
        </Container>
      </header>
    </div>
  );
}

export default App;
