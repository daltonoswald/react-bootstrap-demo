import { Container, Row, Col, Button, Alert, Breadcrumb, Card, Form } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavHeader from './NavHeader';

function Test() {

  return (
    <>
     <div className="App">
      <NavHeader />
        <a href='/'>Home</a>
    </div>
    </>
  )
}

export default Test