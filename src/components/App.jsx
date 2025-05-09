import { Link } from 'react-router-dom';
import { Container, Row, Col, Button, Alert, Breadcrumb, Card, Form } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavHeader from './NavHeader';

function App() {

  return (
    <>
     <div className="app">
      <NavHeader />
        <Container>
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
