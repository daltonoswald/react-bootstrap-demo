import { useState } from 'react'
import NavHeader from './NavHeader'
import { Button, Container, Row, Spinner } from 'react-bootstrap'

export default function Spinners() {
    const [clicked, setClicked] = useState(false);

    const variants = ['primary','secondary','success','danger','warning','info','light','dark',]

    return (
        <div className='app'>
        <NavHeader />
        <Container>
            <Row>
                <Spinner animation='border' role='status'>
                    <span className='visually-hidden'>Loading...</span>
                </Spinner>
            </Row>
            <Row>
                <Spinner animation='grow' />
            </Row>
            <Row>
                {variants.map((variant) => (
                    <Spinner key={variant} variant={variant} animation='border' role='status'>
                        <span className='visually-hidden'>Loading...</span>
                    </Spinner>
                ))}
            </Row>
            <Row>
                {variants.map((variant) => (
                    <Spinner key={variant} variant={variant} animation='grow' role='status'>
                        <span className='visually-hidden'>Loading...</span>
                    </Spinner>
                ))}
            </Row>
            { !clicked && (
                <Button onClick={() => setClicked(true)}>Start Load</Button>
            )}
            { clicked && (
                <Button variant='primary' disabled>
                    <Spinner
                        as='span'
                        animation='border'
                        size='sm'
                        role='status'
                        aria-hidden='true'
                    />
                    <span className='visually-hidden'>Loading...</span>
                </Button>
            )}
        </Container>
    </div>
    )
}