import { Link } from 'react-router-dom';
import { Container, Row, Col, Button, Alert} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavHeader from './NavHeader';
import { useState } from 'react';

function Alerts() {
    const [isActive, setIsActive] = useState(true)
    const [show, setShow] = useState(true);

  return (
    <>
     <div className="app">
      <NavHeader />
        <Container >
            {[
                'primary',
                'secondary',
                'success',
                'danger',
                'warning',
                'info',
                'light',
                'dark',
            ].map((variant) => (
                <Alert key={variant} variant={variant}>This is a {variant} alert!</Alert>
            ))}
            <Row>
            {(isActive) && (
                <Alert variant='danger' onClose={() => setIsActive(false)} dismissible>
                    <Alert.Heading>Oh no! This is a Danger Alert Heading!</Alert.Heading>
                    <p>You can click this error away, try it out!</p>
                </Alert>
            )}
            {(!isActive) && (
                <Button onClick={() => setIsActive(true)} variant='danger' className='mb-3'>Show Danger Alert</Button>
            )}
            {(show) && (
                <Alert show={show} variant='info'>
                    <Alert.Heading>Hey there!</Alert.Heading>
                    <p>This is an info variant of an alert. The close button will be on the button instead of the X on top like the danger alert.</p>
                    <hr />
                    <div className='d-flex justify-content-end'>
                        <Button onClick={() => setShow(false)} variant='outline-info'>
                            Close me
                        </Button>
                    </div>
                </Alert>
            )}
            {(!show) && (
                <Button onClick={() => setShow(true)} className='mb-3'>Show Info Alert</Button>
            )}
            </Row>
        </Container>
    </div>
    </>
  )
}

export default Alerts
